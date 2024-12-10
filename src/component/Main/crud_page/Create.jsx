import { useState, useEffect } from "react";
import axios from "axios";
const basePost = {
    title: "",
    slug: "",
    content: ``,
    image: "",
    tags: [],
};

export function Create(){
    const [formData, setFormData] = useState(basePost); //creiamo una varibile statica che ha come valore iniziale l'oggetto creato sopra
    const [posts, setPosts] = useState([]);
    const [status, setStatus] = useState(false);
    const uri = "http://localhost:3000/posts/";


        function changeHandler(event) {
            //creo una variabile per il valore da mettere nell'oggetto, se l'elemento che ha scatenato l'evento è  di tipo checkbox
            //allora il valore andra a prendere il valore di checked altrimenti di value
        
            let value =
              event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value;
            /*if(event.target.type === 'checkbox'){
              
            }*/
            setFormData((formData) => {
              //passo una callback alla funzione set che ha come parametro la variabile reattiva
              return {
                ...formData, //ritornera un oggetto copia di form data
                [event.target.name]: value,
              }; //ma che avra una key presa dal name dell elemento che ha scatenato l'evento con il rispettivo valore come value
            });
          }

    function onSubmit(event) {
            event.preventDefault();
            //controllo se i campi non sono vuoti
            if (formData.title === "" && formData.content === "" && formData.image === "" && formData.tags === "") {
                alert("vuoto uno dei due");
                return;
            }
        
            //creo una variabile di appoggio dove andro a mettere i valori che ho preso dal form
            const newPost = {
                ...formData, //uso lo spread operator per mettere i valori di form data dentro al nuovo post
                slug : formData.title.trim().split(' ').join('-'),
                tags : formData.tags.split(' ')
            };
            console.log(newPost)
            axios
            .post(uri, newPost) //passiamo come parametro l'oggetto che vogliamo inserire
            .then((res) => {
                console.log(res)
                setPosts([...posts, res.data]);//con set new arr vado a creare un array con i vecchi post piu quello nuovo
                setFormData(basePost);//riazzero i campi
                setStatus(false);
            })
            .catch((err) => {
                console.error(err);
            });

    }

    useEffect(() => {
        if (status) {
          alert("Status aggiornato");
        }
      }, [status]);

    return(
        <form
          className="row column-gap-3 row-gap-3 pt-5"
          onSubmit={onSubmit}
          action=""
        >
          {/* vado a mettere nei campi di input la funzione da invocare al cambio dell'input e come valore il valore della variabile reattiva*/}
          <input
            onChange={(e) => changeHandler(e)}
            type="text"
            className="col-2"
            name="title"
            value={formData.title}
            placeholder="inserisci titolo"
            required
          ></input>
          <input
            onChange={(e) => changeHandler(e)}
            type="text"
            className="col-2"
            name="content"
            value={formData.content}
            placeholder="inserisci contenuto"
            required
          ></input>
          <input
            onChange={(e) => changeHandler(e)}
            type="text"
            className="col-2"
            name="image"
            value={formData.image}
            placeholder="inserisci url imagine"
            required
          ></input>
          <input
            onChange={(e) => changeHandler(e)}
            type="text"
            className="col-2"
            name="tags"
            value={formData.tags}
            placeholder="inserisci tags"
            required
          ></input>
          <input
            type="submit"
            className="col-1"
            onClick={() => {
              setStatus(true);
            }}
          ></input>
        </form>
    )
}