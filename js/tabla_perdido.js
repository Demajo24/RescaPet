const { createApp } = Vue

  createApp({
    data() {
      return {
        url:"https://demajo.pythonanywhere.com/perdidos", 
        perdidos:[],
        error:false,
        cargando:true
      }
    },
  
    created() {
        this.fetchData(this.url)  
    },
    methods: {
        fetchData(url) {
         
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.perdidos = data;
                    this.cargando=false
                })
                .catch(err => {
                    console.error(err);
                    this.error=true              
                });
        },
   
        eliminar(id) {
            
            const url = 'https://demajo.pythonanywhere.com/borrar/'+id;
            var options = {
                method: 'DELETE',
                
            }
            fetch(url, options)
                .then(res => res.text()) // or res.json()
                .then(res => {
                    alert("Eliminado correctamente")
                    location.reload();
                })
        }


    },
    



  }).mount('#app')