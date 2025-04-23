// app/api/send-email/route.ts
import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
    const body = await req.json()

    try {
        await resend.emails.send({
            from: "onboarding@resend.dev", // Make sure your domain is verified with Resend
            to: "cmutalem@gmail.com",
            subject: `New Project Inquiry from ${body.businessName}`,
            html: `
        <h2>Project Details</h2>
        <p><strong>Business Name:</strong> ${body.businessName}</p>
        <p><strong>Description:</strong> ${body.businessDescription}</p>
        <p><strong>Website:</strong> ${body.businessWebsite}</p>
        <p><strong>Goals:</strong> ${body.projectGoals.join(", ")}</p>
        <p><strong>Contact Email:</strong> ${body.projectContact}</p>
    `
        })

        return NextResponse.json({ success: true })
    } catch (error) {
        console.error(error)
        return NextResponse.json({ success: false, error })
    }
}
