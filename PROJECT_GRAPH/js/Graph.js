function toDegree(x){
    return((Math.PI*x)/180)
}
function new_Eq(val){
    expression2 = document.getElementById(val.id).value;
    draw_initial(expression2);
 }


function axis()
  {
    var layout={
      paper_bgcolor: "white", 
      plot_bgcolor: "transparent",
      plot_width:"850px", 
      xaxis: {
        //dtick:0.25,
        gridcolor: "rgb(100,100,100)",
        title:"X-Axis",
        range: [-1.5,1.5],  
        showgrid: true, 
        showline: true, 
        showticklabels: true,
        
        tickcolor: "red", 
        ticks: "outside", 
        zeroline: true,
        zerolinecolor: '#969696',
        zerolinewidth: 1,
        linecolor: '#636363',
        linewidth: 1
            }, 
      yaxis: {
        //dtick:0.25,
        gridcolor: "rgb(200,200,200)", 
        range:[-1.5,1.5],
        title:"Y-Axis",
        showgrid: true, 
        showline: true, 
        showticklabels: true, 
        tickcolor: "rgb(127,127,127)", 
        ticks: "outside", 
        
        zeroline: true,
        zerolinecolor: '#969696',
        zerolinewidth: 1,
        linecolor: '#636363',
        linewidth: 1
            },
      autosize: true,  width: 750,  height: 600,
      margin: {    l: 50,    r: 50,    b: 45,    t: 15,    pad: 0},
     
      };
      return(layout)
  }
