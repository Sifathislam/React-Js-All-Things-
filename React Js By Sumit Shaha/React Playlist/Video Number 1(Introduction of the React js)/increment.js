const domContainer = document.querySelector("#root");

const Increment = () =>{
    const [counter, setCounter] = React.useState(0);
    return(
        <div class="bg-dark m-5 p-3">
            <p class="text-light pt-3">Counter</p>
            <h1 class="text-light">{counter}</h1>
            <div>
                <button id="button" class="mb-4 btn btn-outline-success" onClick={()=> setCounter(counter + 1)}>Increment + </button>
            </div>
        </div>
    );
};

ReactDOM.render(
<div class="container">
<Increment />
<Increment />
<Increment />
</div>, domContainer);
