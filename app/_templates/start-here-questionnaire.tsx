"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

const notebook = {
    header: ``,
    text: `Tell us a bit about your project — We’ll follow up with ideas.`
}

type FormInputs = {
    businessName: string,
    businessDescription: string,
    businessWebsite: string,
    projectGoals: string[],
    projectContact: string,
    companyPosition?: string // 🐝 honeypot field
}

const goalOptions = [
    "Gnenerate new leads",
    "Provide information about services",
    "Build brand creadibility",
    "Educate and inform an audience",
    "Other"
]

export default function StartHereQuestionnaire() {
    const { register, handleSubmit, setValue, watch, reset } = useForm<FormInputs>()
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle")
    const [loading, setLoading] = useState(false)

    const selectedGoals = watch("projectGoals", [])

    const handleCheckboxChange = (goal: string, checked: boolean) => {
        const updatedGoals = checked
            ? [...selectedGoals, goal]
            : selectedGoals.filter(g => g !== goal)

        setValue("projectGoals", updatedGoals)
    }

    const onSubmit = async (data: FormInputs) => {
        if (data.companyPosition) {
            // This is likely a bot (honeypot filled out)
            console.warn("Bot submission detected. Ignored.")
            return
        }

        setLoading(true)

        try {
            const res = await fetch("/api/send-questionnaire-response", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            })

            const json = await res.json()
            if (json.success) {
                setStatus("success")
                reset()
            } else {
                throw new Error("Failed to send")
            }
        } catch (error) {
            console.error("Email send error:", error)
            setStatus("error")
        } finally {
            setLoading(false)
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6  p-4">
            <p className="font-medium text-[length:var(--text-1)] text-center">{notebook.text}</p>
            <div className="space-y-2">
                <Label htmlFor="businessName" className="font-bold text-[length:var(--text-0)]">Business Name</Label>
                <Input id="businessName" placeholder="e.g. Acme Inc." {...register("businessName")} />
            </div>

            <div className="space-y-2">
                <Label htmlFor="businessDescription" className="font-bold text-[length:var(--text-0)]">What do you do?</Label>
                <Textarea
                    id="businessDescription"
                    placeholder="Briefly describe what your business does..."
                    {...register("businessDescription")}
                />
            </div>

            <div className="space-y-2">
                <Label htmlFor="businessWebsite" className="font-bold text-[length:var(--text-0)]">Current Website (optional)</Label>
                <Input id="businessWebsite" placeholder="www.example.com" {...register("businessWebsite")} />
            </div>


            <div className="space-y-2">
                <Label className="font-bold text-[length:var(--text-0)]">What is your project goal?</Label>
                <div className="grid gap-2 pt-2">
                    {goalOptions.map(goal => (
                        <div key={goal} className="flex items-center space-x-2">
                            <Checkbox
                                id={goal}
                                checked={selectedGoals.includes(goal)}
                                onCheckedChange={(checked) =>
                                    handleCheckboxChange(goal, checked as boolean)
                                }
                            />
                            <Label htmlFor={goal}>{goal}</Label>
                        </div>
                    ))}
                </div>
            </div>

            <div className="space-y-2">
                <Label htmlFor="projectContact" className="font-bold text-[length:var(--text-0)]">Contact Email</Label>
                <Input
                    id="projectContact"
                    type="email"
                    placeholder="you@example.com"
                    {...register("projectContact")}
                />
            </div>

            <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Sending..." : "Submit"}
            </Button>

            {status === "success" && (
                <p className="text-green-600 font-medium text-center">Thank you! Your message has been sent.</p>
            )}
            {status === "error" && (
                <p className="text-red-600 font-medium text-center">Oops! Something went wrong. Please try again.</p>
            )}

            <input
                type="text"
                placeholder="Your position in the company"
                {...register("companyPosition")}
                style={{ display: "none" }}
                tabIndex={-1}
                autoComplete="off"
                className="sr-only"
            />

        </form>
    )
}
