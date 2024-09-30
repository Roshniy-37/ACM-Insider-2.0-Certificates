import './App.css';
import { useState } from 'react';
import logo from './logo.svg'

function App() {
  const [email, setEmail] = useState("");
  const data = {'Ria Arora.pdf': 'https://drive.google.com/file/d/1J8XMV9PoVdCPA4Rr5Q-xwkhlG1Iq2iRa/view?usp=drive_link', 
  'Ronak Choudhary.pdf': 'https://drive.google.com/file/d/1VVguF-TUzDC3TaamXQyKqQjfGQcEYk5r/view?usp=drive_link',
  'Ashutosh Kumar.pdf': 'https://drive.google.com/file/d/1vo_HuDfT3qTs16emCTQ_V_VcMwmA93N6/view?usp=drive_link',
  'Roshni Yadav.pdf': 'https://drive.google.com/file/d/1mySmboN3rjPKZQqf-GvRfO6HVgFEj8p1/view?usp=drive_link',
  'Dhruv Prasad Mukherjee.pdf': 'https://drive.google.com/file/d/1GddGOrpBZ3IAseDMOse40GVOUx7LUfjT/view?usp=drive_link',
  'Mragank Muni.pdf': 'https://drive.google.com/file/d/1zaik5NEHVMX3cYVanxys_-0ngKEtdc5i/view?usp=drive_link',
  'Vivek Gautam.pdf': 'https://drive.google.com/file/d/19_iJG_CuyZszGAVr0r_Zi9SPsxenXxfc/view?usp=drive_link',
  'Anuj.pdf': 'https://drive.google.com/file/d/1Ensgw7nfsYaNx1KHmr-dmJchqsrZvHrT/view?usp=drive_link',
  'Nikhil Garg.pdf': 'https://drive.google.com/file/d/1BWEaNWlcJZVulqj1b1DCcJL4XF7Nryrf/view?usp=drive_link',
  'Abhinav Kumar.pdf': 'https://drive.google.com/file/d/1keHDLt-5kBFyVp6H0LLNMZ9c3evy6G99/view?usp=drive_link',
  'Piyusha Kaushik.pdf': 'https://drive.google.com/file/d/1e1on8k_kWUwBWy1tR1t-1IPYCNmt9Bjs/view?usp=drive_link',
  'Deepak.pdf': 'https://drive.google.com/file/d/1UlkWDOIqwd1ttRKcGYPCiPer1zc5PeM3/view?usp=drive_link',
  'Divya Jain.pdf': 'https://drive.google.com/file/d/1ZMXi8-_PGqmofNTjqk3H_NuMIlW73-Kg/view?usp=drive_link',
  'Dhruv Kumar Singh.pdf': 'https://drive.google.com/file/d/1zPb0lF0WwUNv1CZi27ItrHr9E1tMWVhf/view?usp=drive_link',
  'Gaurav Gautam.pdf': 'https://drive.google.com/file/d/1_ZnxIb2Jp5t5oVB34Qv83szJNG49VjDI/view?usp=drive_link',
  'Gayatri.pdf': 'https://drive.google.com/file/d/1rEu59akc4klU8Pc28vRRRSj_VZRXfw76/view?usp=drive_link',
  'Lakshya Madhwani.pdf': 'https://drive.google.com/file/d/1dCwCI6wtk_WOc8l-3ksBesoWgtgqiQBi/view?usp=drive_link',
  'Pari Kalra.pdf': 'https://drive.google.com/file/d/1a7FCOgInd92rNqtv3Hv6Ble7XkWGaLIx/view?usp=drive_link',
  'Parth.pdf': 'https://drive.google.com/file/d/18IZG2VpITJLX4ciDJVVVe_L4QltdkKX-/view?usp=drive_link',
  'Rishi Jha.pdf': 'https://drive.google.com/file/d/1mca-eDzb31LGAh-KjCVqPW1qLj7Ynvqp/view?usp=drive_link',
  'Saanvi Arora.pdf': 'https://drive.google.com/file/d/1TEmBUvr9-0kjxFH3E8ZDEjhftbzEsEPr/view?usp=drive_link',
  'Shambhavi Sharma': 'https://drive.google.com/file/d/1NkoJKdghFckHv0wpb47Bm6K4K3g_9igo/view?usp=drive_link',
  'Tannu Singh.pdf': 'https://drive.google.com/file/d/13yuVAOl-nUnHex8F91OndpmLxOH3lgJK/view?usp=drive_link',
  'Aakash Bhardwaj.pdf': 'https://drive.google.com/file/d/1lCzYRdsIDqL7Ljr754hV9kV4q5kjFauZ/view?usp=drive_link',
  'Karan Verma.pdf': 'https://drive.google.com/file/d/1gGiuakpyuOkWueZKPO20Fm9QYViKGmIu/view?usp=drive_link',
  'Arnav Saini.pdf': 'https://drive.google.com/file/d/1TKmunhpQLy4bnEsP2gEtgpSJ-_WQrc5k/view?usp=drive_link'
}

  function searchResult(){
    if(Object.keys(data).includes(email+'.pdf')){
      const url = data[email+'.pdf'];
      window.open(url, '_blank');
    }else{
      alert('No certificate associated with this name')
    }
  }

  return (
    <div className='w-full h-screen'>
      <div className='h-[10vh] w-full bg-violet-900 justify-center flex items-center text-5xl font-semibold text-white'>
        ACM Insider 2.0 Certificates
      </div>
      <section className='h-[80vh] w-full flex'>
        <div className='w-[50vw] h-full justify-center items-center flex'>
          <img alt='logo' src={logo}/>
        </div>
        <div className='w-[50vw] h-full justify-center items-center flex flex-col gap-4'>
          <input className='w-1/2 px-4 py-2 border-2 rounded-md border-cyan-500 ' type='name' placeholder='Enter registered name' value={email} onChange={(e)=>setEmail(e.target.value)} />
          <button onClick={searchResult} className='px-4 py-2 font-medium text-white rounded-md bg-cyan-500 hover:bg-slate-600'>Find</button>
        </div>
      </section>
      <div className='h-[10vh] w-full border-t-2 bg-violet-900 text-white flex justify-center items-center font-semibold text-2xl '>
        <a href='https://www.linkedin.com/in/yadavroshni/'  rel="noreferrer" target='_blank'><h1>Developed by Roshni Yadav</h1></a>
      </div>
    </div>
  );
}

export default App;
