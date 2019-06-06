var tableData = data;

var body = d3.select("tbody");

function table(data) {
  body.html("");

data.forEach((Row) => {
var row = body.append("tr");
Object.values(Row).forEach((val) => {
var ufoInfo = row.append("td");
ufoInfo.text(val);
}
);
});
}

function buttonClick() {

d3.event.preventDefault();
var date = d3.select("#datetime").prop("value");
var filteredData= tableData;
if (date) {
filteredData= filteredData.filter(row => row.datetime === date);
  }
  table(filteredData);
}
d3.selectAll("#filter-btn").on("click", buttonClick);
table(tableData);

