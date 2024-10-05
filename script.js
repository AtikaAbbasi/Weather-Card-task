
var userin = prompt(`Enter season 
    Rainy 
    Hot 
    Cold
    Cherry ` )

if(userin.toLowerCase() === 'rainy'){
    document.write(` <h1 class="heading">It's Rainy </h1>
      </br>
      <div class="card card-r" style="width: 18rem;">
        <img src="https://i.pinimg.com/originals/6e/04/0b/6e040b9c6e4685ca199672e6999dd05f.gif" class="card-img-top" alt="...">
        <div class="card-body">
        <h1 class="heading">It's Rainy </h1>
       <h2 class="smiley1">&#128578</h2>
          <p class="card-text">Rain conjures a sweet pattern upon my skin, the thousands of liquid globes reflecting the greenery of nature lorem isump loremisump rainy weather day.
          </p>
        </div>
      </div>`)
}
else if(userin.toLowerCase() === 'hot'){
    document.write(`<h1 class="heading">It's Hot Today </h1>
      </br>
      <div class="card " style="width: 18rem;">
        <img src="https://www.icegif.com/wp-content/uploads/2022/06/icegif-715.gif" class="card-img-top" alt="...">
        <div class="card-body">
         <h1 class="heading">It's Hot </h1>
         <h2 class="smiley1">&#128527</h2>
          <p class="card-text">What hot weather! is correct. You can't use an article because you can't count weather. You can count days, so you could say “ What a hot day!</p>
        </div>
      </div>`)
}

else if(userin.toLowerCase() === 'cold'){
    document.write(`<h1 class="heading">It's Cold yayyy </h1>
      </br>
      <div class="card card-c" style="width: 18rem;">
        <img  src="https://cdn.pixabay.com/animation/2022/09/13/02/18/02-18-02-177_512.gif" class="card-img-top " alt="...">
        <div class="card-body">
         <h1 class="heading">cold weather </h1>
          <h2 class="smiley1">&#128564</h2>
          <p class="card-text">It was a long, cold winter. It's cold outside, but the wind makes it feel even colder. It's bitterly cold out there! metal that is cold to the touch Are you cold</p>
        </div>
      </div>`)
}

else if(userin.toLowerCase() === 'cherry'){
    document.write(`<h1 class="heading">It's Cherry Blossom Today  </h1>
      </br>
      <div class="card card-s" style="width: 18rem;">
        <img src="https://i.pinimg.com/originals/6a/ee/ea/6aeeea24e8fd4023a349e354eefa33ed.gif" class="card-img-top" alt="...">
        <div class="card-body">
         <h1 class="heading">  blossom weather </h1>
        
         <h2 class="smiley1">&#128512 </h2> 
          <p class="card-text">It was a bright and sunny day. The sun shone brilliantly in the clear, blue sky. It was a bright and sunny day. White, fluffy clouds drifted across the clear, blue sky.</p>
        </div>
      </div>`)
}

else{
    document.write(` <h1 class="head1">Please fill in the input </br> with given options</h1>
        <div class="line"> </div>


       <div class="display">

        <img class="imgeg " src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/aba9ceaa-b869-4ba6-9142-3592b1e92188/dbjr7rg-4654ddb6-4cc3-41e3-bae9-70b4f9b59b42.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2FiYTljZWFhLWI4NjktNGJhNi05MTQyLTM1OTJiMWU5MjE4OFwvZGJqcjdyZy00NjU0ZGRiNi00Y2MzLTQxZTMtYmFlOS03MGI0ZjliNTliNDIuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.zxS2tebDeks4vlv7ubabUV95StYlngiI0b20CuGEs_0" alt=""> 

       </div>

       
  
        ` )
}



