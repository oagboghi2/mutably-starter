console.log("Sanity Check: JS is working!");

$(document).ready(function(){
  // code in here
  loadPokemon()

  $(document).on('click','button.save', function(data){
    $.ajax( {
      method: 'PUT',
      url: 'http://mutably.herokuapp.com/pokemon'+id
      //data: {""}
    })
    var id = $(this).data('_id')
    //event.preventDefault();
    //$(this).removeClass(".btn-primary").addClass(".btn-success").show();
    console.log(id);

    // $("button").slideToggle("fast");
  });

  function loadPokemon(){
    $.ajax({
      Method: "PUT",
      url: `http://mutably.herokuapp.com/pokemon`,
      header: "Content-Type : application/json",
      dataType: 'json'})
      .then(addText)
      .catch(function(error){
          console.log(error)
        });
  }

  function addText(data){
    for(var i = 0; i < 10; i++){
      $(".list-group").map(function(){
        $(this).append(
            '<li><span class= "d-inline-block  name=' + data.pokemon[i].name +'>' + data.pokemon[i].name + '</span>'
          + '<span class= "d-inline-block" name=' + data.pokemon[i].image +'><img src=' + data.pokemon[i].image + '></span>'
          + '<span class= "d-inline-block" name=' + data.pokemon[i].pokedex +'>' + data.pokemon[i].pokedex + '</span>'
          + '<button type="button" class= "btn-primary d-inline-block save" id="save">EDIT</button>'
          + '<span class= "form-inline edit-form"><input class="form-control" type="text" value="' + data.pokemon[i].name + '"></span>'
          + '<button type="button" class= "btn-primary d-inline-block delete"  id="edit">DELETE</button></li>'
        );
      });
    }
    console.log(data);
    return data
  }


});


// var savePokemonButton = function(){
// $(document).on('click','button.save', function(event){
//   console.log("testing1");
//   $(".save")
//   $.ajax('http://mutably.herokuapp.com/pokemon'+id, {
//     method: 'PUT'
//     //data: {""}
//
//   })
//   //event.preventDefault();
//   //$("button").slideToggle("fast");
// });
// };







//+'<button class="btn btn-primary edit-btn edit-'+data.books[i]._id+'" data-id="'+data.books[i]._id+'">Edit</button>'
