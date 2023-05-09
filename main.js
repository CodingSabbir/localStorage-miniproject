(function(){
    const profile=document.querySelector('.profile');
    const form=document.querySelector('.profileForm');
    const name=document.querySelector('#name');
    const age=document.querySelector('#age');
    const profession=document.querySelector('#profession');
    
    
    document.addEventListener('DOMcontentLoaded',function(){
        let profiles=[];
    if(localStorage.getItem('profiles')){
        profiles=  JSON.parse(localStorage.getItem('profiles'))  
    }else{
        profiles=[];
    }
    let formattedText='';
    profiles.forEach((profile)=>{
        formattedText +=formatText(profile);
     
     });
     profile.innerHTML=formattedText;
    });
    
    
    
    
    form.addEventListener('submit',(event)=>{
       event.preventDefault(); 
    if(name.value === '' || age.value === '' || profession.value === ''){
        alert('Please provide correct information')
        return
    }else{
        const profiledata={
            name:name.value,
            age:age.value,
            profession:profession.value
        };
        
        const formattedText= formatText(profiledata);
        saveDataStorage(profiledata)
        profile.innerHTML += formattedText;
        name.value='';
        age.value='';
        profession.value='';
    }
    });
    
    
    
    
    function formatText({name,age,profession}){
        return`  <div class="profile-inc">
        <h3>Name:${name}</h3>
        <p>Age:${age}</p>
        <p>Profession:${profession}</p>
        </div>
    `;   
    };
    
    
    
    
    function saveDataStorage(profiledata){
    let profiles=[]
    if(localStorage.getItem('profiles')){
        profiles=  JSON.parse(localStorage.getItem('profiles'))  
    }else{
        profiles=[];
    }
    profiles.push(profiledata);
    localStorage.setItem('profiles',JSON.stringify(profiles));
    };
  
}());
