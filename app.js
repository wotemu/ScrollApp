const data = [
  {
    name:'John Doe',
    age: 32,
    gender: 'male',
    lookingfor: 'female',
    location: 'Addis Ababa, Ethiopia',
    image:  'https://randomuser.me/api/portraits/men/82.jpg'
  },
  {
    name:'Fuchoro Kassu',
    age: 38,
    gender: 'male',
    lookingfor: 'female',
    location: 'Helsinki, Finland',
    image:  'https://randomuser.me/api/portraits/men/88.jpg'
  },
  {
    name:'Tsehay Bedilu',
    age: 30,
    gender: 'female',
    lookingfor: 'male',
    location: 'Espoo, Finland',
    image:  'https://randomuser.me/api/portraits/women/82.jpg'
  }

];


const profiles = profileIterator(data);

//call first profile
nextProfile();


//next event
document.getElementById('next').addEventListener('click', nextProfile);

//next profile display
function nextProfile(){
  const currentProfile = profiles.next().value;
  if(currentProfile !== undefined){
    
    document.getElementById('profileDisplay').innerHTML = `
      <ul class="list-group">
        <li class="list-group-item">Name: ${currentProfile.name}</li>
        <li class="list-group-item">Age: ${currentProfile.age}</li>
        <li class="list-group-item">Location: ${currentProfile.location}</li>
        <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
      </ul>
    `;

      document.getElementById('imageDisplay').innerHTML = `<img src=${currentProfile.image}>`;
  } else {
    //no more profiles
    window.location.reload();

  }  

}

//profile iterator function
function profileIterator(profiles){
  let nextIndex = 0;

  return {
    next: function(){
      return nextIndex < profiles.length ? { value: profiles[nextIndex++], done:false} : {done : true}
    }
  };
}