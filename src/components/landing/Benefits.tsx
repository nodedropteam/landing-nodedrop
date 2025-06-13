import React from 'react'
import Wrapper from '../elements/Wrapper'

const benefits = [
  {
    title: "Calculable Monthly Costs",
    description: "Replaces a web department, agency, or freelancer with a simple monthly fee, without any hidden fees or contracts."
  },
  {
    title: "Get 24/7 Control",
    description: "Submit as many requests as you like. We will adapt respectively and work on them one by one as you submit them."
  },
  {
    title: "Fast & Professional",
    description: "With more than 5 years of experience in the web industry and more than 100k customers, we deliver high quality."
  },
  {
    title: "Spend Time on Your Business",
    description: "Simple communication in email or Slack."
  },
  {
    title: "Flexibility is Important",
    description: "Pause or cancel your plan anytime. No long-term contracts or unexpected fees."
  },
  {
    title: "Satisfaction Guarantee",
    description: "Not happy with the result? Get your money back in your first month."
  }
];


export default function Benefits() {
  return (
    <section>
      <Wrapper className='py-24 space-y-16'>
        <div className="copy space-y-4">
          <h2 className='font-medium text-center mx-auto text-3xl max-w-[480px]'>
            Membership benefits
          </h2>

          <p className='text-center mx-auto max-w-[480px]'>
            Perks so good you'll never need to go anywhere else for your design. Seriously.
          </p>
        </div>

        <div className="card-grid flex flex-wrap gap-8">
          {benefits.map((feature, index) => (
            <div className='w-full sm:w-[45%] md:w-[25%] grow'>
              <div className="card" key={index}>
                <div className="card-header mb-4">
                  <h3 className="card-title text-lg font-semibold text-center">{feature.title}</h3>
                </div>
                <div className="card-body">
                  <p className="card-text text-center text-sm">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Wrapper>

    </section>
  )
}
