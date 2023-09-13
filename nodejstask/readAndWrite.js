const fs = require("fs")

function readCsvData(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf8", (error, data) => {
      console.log(data)
      if (error) {
        reject(error)
      } else {
        const lines = data.split("\n")
        const header = lines[0].split(",").map((item) => item.trim())
        const rows = lines.slice(1)
        // console.log(lines, header, rows)

        const result = rows.map((row) => {
          const values = row.split(",").map((item) => item.trim())
          return header.reduce((acc, item, index) => {
            acc[item] = values[index]
            return acc
          }, {})
        })
        resolve(result)
      }
    })
  })
}

async function main() {
  const inputFile = "data.csv"
  const outFile = "output.json"

  const csvDataObject = await readCsvData(inputFile)
  console.log(csvDataObject)

  fs.writeFile(
    outFile,
    JSON.stringify(csvDataObject, null, 2),
    "utf8",
    (err) => {
      if (err) {
        console.error("err")
      } else {
        console.log("success")
      }
    }
  )
}

main()
