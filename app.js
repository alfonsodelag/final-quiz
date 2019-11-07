

function get_localStorage()
{
    let name = localStorage.getItem( "name" );
    let person = JSON.parse( localStorage.getItem( "person" ) );

    console.log( name );
}


function save_localStorage()
{
let person = 
    {
    name: "Alfonso",
    age: 30,
    email: "alfonsodelag1@gmail.com",
    coords: {
        lat: 10,
        lng: -10,
    }
}

let name = "Ricky";

localStorage.setItem( "name", name );
localStorage.setItem( "person", JSON.stringify( person)  );


}