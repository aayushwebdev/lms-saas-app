import CompanionCard from '@/components/CompanionCard'
import CompanionsList from '@/components/CompanionsList'
import CTA from '@/components/CTA'
import { recentSessions } from '@/constants'
// import "/globals.css"

const Page = () => {
  return (
    <main>
      <h1 className='text-2xl'>Popular Companions</h1>
      <section className='home-section'>
        <CompanionCard 
          id="123"
          name="Neura the Brainy Exlporer"
          topic="Neural Networks of Brain"
          subject="Science"
          duration={30}
          color="#ffad6e"
        />
        <CompanionCard 
          id="456"
          name="Countsy the Number Wizard"
          topic="Derivatives & Integrals"
          subject="Maths"
          duration={30}
          color="#e5d0ff"
        />
        <CompanionCard 
          id="789"
          name="Verba the Vocbulary Builder"
          topic="Language"
          subject="English Literature"
          duration={30}
          color="#bde7ff"
        />
      </section>

      <section className='home-section'>
        <CompanionsList 
          title = "Recent Sessions"
          companions={recentSessions}
          classNames="w-2/3 max-lg:w-full"
        />
        <CTA />
      </section>
    </main>   
  )
}

export default Page