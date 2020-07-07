 var x = 1
    var expression2 = 0;
    var expr2 = 0;
    var input;
    var equation;
    var id = 0;
    var data = new Array();
    function createNewElement() {
      id++
      input = document.createElement('div');
      input.innerHTML = "<div><input type='text' id='tst" + id + "' oninput='draw_initial()'></div><br><br>";
      document.getElementById("new").appendChild(input);

    }
    //alert(toRadian(0.03))
    function draw_initial(express) {
      try {
        var layout = axis()
        const expression = document.getElementById("tst" + id).value
        const expr = math.compile(expression)
        var chart = document.getElementById("tst" + id).value;
        var start = (chart.indexOf(')') - 1);
        var string = chart.charAt(start);
        if (express == 1) {
          try{
          const exp1 = document.getElementById("x").value
          const e1 = math.compile(exp1);
          const exp2 = document.getElementById("y").value
          const e2 = math.compile(exp2);
          const tValues1 = math.range(-500, 500, 0.01).toArray()
          const xValues1 = tValues1.map(
              function (x) {
                return e1.evaluate({ t: x })
              });
          const tValues2 = math.range(-500, 500, 0.01).toArray()
          const yValues2 = tValues2.map(
              function (y) {
                return e2.evaluate({ t: y })
              });
          data[id] = {
              x: xValues1,
              y: yValues2,
              line: { shape: 'spline' },
              name: document.getElementById("x").value+document.getElementById("y").value
            }
        }
        catch (err) {
              console.error(err)
              alert(err)
            }
        }
        else {
          if (string == 't') {
            try {
              var theta = new Array();
              var r = new Array();
              var theta1 = new Array();
              var r1 = new Array();
              theta = math.range(-180, 180, 1).toArray()
              r = theta.map(
                function (t) {
                  return (expr.evaluate({ t: toDegree(t) }))
                }
              );
              var xval = new Array();
              var yval = new Array();
              for (var i = 0; i < r.length; i++) {
                xval.push(((r[i]) * Math.cos(toDegree(theta[i]))));
                yval.push(((r[i]) * Math.sin(toDegree(theta[i]))))
              }
              data[id] = {
                x: xval,
                y: yval,
                mode: 'lines',
                line: { shape: 'spline' },
                name: document.getElementById('tst' + id).value
              };
            }
            catch (err) {
              console.error(err)
              alert(err)
            }
          }
          else {
            const xValues = math.range(-500, 500, 0.01).toArray()
            const yValues = xValues.map(
              function (x) {
                return expr.evaluate({ x: x })
              })
            data[id] = {
              x: xValues,
              y: yValues,
              line: { shape: 'spline' },
              name: document.getElementById('tst' + id).value
            }
          }
        }
          Plotly.newPlot('plot', data, layout, { scrollZoom: true })
        
      }
      catch (err) {
        console.error(err)
        alert(err)
      }
    }
    draw_initial(0);
    document.getElementById('form').onsubmit = function (event) {
      event.preventDefault()
      draw_initial(0)
    }
  //alert(x*sup(2));