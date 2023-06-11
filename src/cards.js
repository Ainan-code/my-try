
        function Card(props) {
            return (
              <div class="col sp-3" id="green">
              <img src={props.imgUrl} alt={props.alttext} />
              <h3 class="green-clr">{props.name}</h3>
              <p>
                Morbi sagittis justo a velit placerat ullamcorper quis quis velit.
                Sed convallis at risus ullamcorper auctor. Praesent quis velit
                neque. Quisque semper porta nisi vitae suscipit. Duis lectus magna,
                ornare ac scelerisque.
              </p>
              <button class="btn" id={props.btnId ? props.btnId : "black"}>{props.button? props.button: "Read More" }</button>
            </div>
            );
        }
        
        
          
         



export default Card;