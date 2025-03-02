import React from 'react'
import { Card, CardHeader, CardTitle } from '../ui/card'

export default function Services() {
    return (
        <section className="wrapper py-20">
            <div className="u-container space-y-12">
                <div className="stack flex flex-col items-center">
                    <h2 className='font-bold text-3xl max-w-lg text-center'>Comprehensive software solutions to meet your business needs.</h2>
                    <p></p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    <Card>
                        <CardHeader>
                            <CardTitle>Website Design</CardTitle>
                        </CardHeader>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Mobile App Design</CardTitle>
                        </CardHeader>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Website Development</CardTitle>
                        </CardHeader>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Mobile App Development</CardTitle>
                        </CardHeader>
                    </Card>

                </div>
            </div>
        </section>
    )
}
