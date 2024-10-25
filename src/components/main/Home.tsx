import { AreaChart } from '../charts/AreaChart'
export default function Home() {
    return (
        <section className='flex flex-row justify-center items-center flex-wrap absolute top-5 p-2 gap-2'>
            {
                Array.from({length:10}).map((_,index)=>(
                    <AreaChart index={index} key={index}/>
                ))
            }
        </section>
    )
}
