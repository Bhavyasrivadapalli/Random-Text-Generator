const text=[
    `It's essentially a story of a young couple 
    deeply in love. They have their share of everyday 
    struggles, but the love keeps them going strong. 
    Until one day, when Vijay gets to know that his wife 
    Astha is HIV positive. It's a sudden revelation, and
     he doesn't know what to do.`,
    `It's essentially a story of a young couple 
     deeply in love. They have their share of everyday 
     struggles, but the love keeps them going strong. 
     Until one day, when Vijay gets to know that his wife 
     Astha is HIV positive. It's a sudden revelation, and
      he doesn't know what to do.`,
    `It's essentially a story of a young couple 
      deeply in love. They have their share of everyday 
      struggles, but the love keeps them going strong. 
      Until one day, when Vijay gets to know that his wife 
      Astha is HIV positive. It's a sudden revelation, and
       he doesn't know what to do.`,
    `It's essentially a story of a young couple 
       deeply in love. They have their share of everyday 
       struggles, but the love keeps them going strong. 
       Until one day, when Vijay gets to know that his wife 
       Astha is HIV positive. It's a sudden revelation, and
        he doesn't know what to do.`,
    `It's essentially a story of a young couple 
        deeply in love. They have their share of everyday 
        struggles, but the love keeps them going strong. 
        Until one day, when Vijay gets to know that his wife 
        Astha is HIV positive. It's a sudden revelation, and
         he doesn't know what to do.`,
    `It's essentially a story of a young couple 
         deeply in love. They have their share of everyday 
         struggles, but the love keeps them going strong. 
         Until one day, when Vijay gets to know that his wife 
         Astha is HIV positive. It's a sudden revelation, and
          he doesn't know what to do.`,
    `It's essentially a story of a young couple 
          deeply in love. They have their share of everyday 
          struggles, but the love keeps them going strong. 
          Until one day, when Vijay gets to know that his wife 
          Astha is HIV positive. It's a sudden revelation, and
           he doesn't know what to do.`,
    `It's essentially a story of a young couple 
           deeply in love. They have their share of everyday 
           struggles, but the love keeps them going strong. 
           Until one day, when Vijay gets to know that his wife 
           Astha is HIV positive. It's a sudden revelation, and
            he doesn't know what to do.`,
    `It's essentially a story of a young couple 
    deeply in love. They have their share of everyday 
    struggles, but the love keeps them going strong. 
    Until one day, when Vijay gets to know that his wife 
    Astha is HIV positive. It's a sudden revelation, and
    he doesn't know what to do.`,
   `It's essentially a story of a young couple 
   deeply in love. They have their share of everyday 
   struggles, but the love keeps them going strong. 
    Until one day, when Vijay gets to know that his wife 
    Astha is HIV positive. It's a sudden revelation, and
    he doesn't know what to do.`
];
const form=document.querySelector('.lorem-form');
const amount=document.getElementById('amount');
//const value=document.querySelector('#amount').value;
const result=document.querySelector('.lorem-text');
form.addEventListener('submit',function(e){
    e.preventDefault();
    //const value=amount.value;
    const value=parseInt(amount.value);
    const random=Math.floor(Math.random()*text.length);
    console.log(isNaN(value));
    if(isNaN(value) || value<0 || value>9){
        result.innerHTML=`<p class="result">${text[random]}</p>`;
    } else{
        let tempText=text.slice(0,value);
       
        tempText=tempText.map(function(item){
            return `<p class="result">${item}</p>`;
        }).join('') ;
        result.innerHTML=tempText;
        console.log(tempText);
    }
})