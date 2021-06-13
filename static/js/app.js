// from data.js
var tableData = data;

const content = d3.select("tbody")

function genContents(data) {
    content.html("")

    data.forEach((contentRow) => {

        const row = content.append("tr");

        Object.values(contentRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
        })
    })
}

function clickHandler() {
    const dateInput = d3.select("#datetime").property("value");

    let cleanedContent = content

    if (dateInput){
        cleanedContent = cleanedContent.filter(row => row.datetime === dateInput)
    }

    genContents(cleanedContent)

}

d3.selectAll("#filter-btn").on("click", clickHandler)

genContents(tableData)

