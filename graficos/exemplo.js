new Morris.Bar({
    // ID do elemento onde o grafico vai aparecer.
    element: 'graficoB',
   
      data: [
      { year: '2008', value: 20 },
      { year: '2009', value: 10 },
      { year: '2010', value: 5 },
      { year: '2011', value: 5 },
      { year: '2012', value: 20 },
      { year: '2013', value: 25 },
      { year: '2014', value: 30 }

    ],
    //Nome do eixo com os valores x
    xkey: 'year',
    // A lista de nomes dos atributos y.
    ykeys: ['value'],
    // Labels for the ykeys -- will be displayed when you hover over the
    // chart.
    labels: ['Value']
  });



  new Morris.Line({
        element: 'graficoL',
   
      data: [
      { year: '2008', value: 20 },
      { year: '2009', value: 10 },
      { year: '2010', value: 5 },
      { year: '2011', value: 5 },
      { year: '2012', value: 20 },
      { year: '2013', value: 25 },
      { year: '2014', value: 30 }

    ],
    xkey: 'year',
    ykeys: ['value'],
    labels: ['Value']
  });

  new Morris.Donut({
        element: 'graficoD',
   

    data: [
      { label: 'Alugueis', value: 20 },
      { label: 'Vendas', value: 30 },
      { label: 'Ferias', value: 20 },
      { label: 'Compras', value: 20 }   

    ],
  
  });


  new Morris.Area({
        element: 'graficoA',
   
      data: [
      { year: '2008', value: 20 },
      { year: '2009', value: 10 },
      { year: '2010', value: 5 },
      { year: '2011', value: 5 },
      { year: '2012', value: 20 },
      { year: '2013', value: 25 },
      { year: '2014', value: 30 }

    ],
    xkey: 'year',
    ykeys: ['value'],
    labels: ['Value']
  });