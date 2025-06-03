const SkillBar = (precentage)=> {
return (
   <>
   
   <div className=' w-full  flex items-center justify-center'>
    <div className='text-2xl h-5 flex items-center pl-1 font-bold rounded-2xl  w-80 bg-accent'>
    <div className={`text-2xl h-4 font-bold  rounded-2xl   bg-fill`} style={{ width: `${precentage.precentage}%` }}>
   
    
    </div>
    
    </div>
   </div>
   
   </>
  );
}

export default SkillBar;