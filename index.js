// code your solution here
function superbowlWin(record) {
    const result = record.find(y => y.result === "W")
    console.log('myresult : ', result);
    if(result) return result.year
    return undefined
}

