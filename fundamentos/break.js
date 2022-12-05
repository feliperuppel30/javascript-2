const nums = [1, 2, 3, 5, 6, 7, 8]

for(x in nums){
    if(x == 5){
    break
}
    console.log(`${x} = ${nums[x]}`)
}

for (y in nums){
    if(y ==5){
        continue
    }
    console.log(`${y} = ${nums[y]}`)
}