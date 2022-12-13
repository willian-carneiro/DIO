const tratarData = (data: string) => {
    const arrData = data.split("-")
    return `${arrData[2]}/${arrData[1]}/${arrData[0]}`
}

export default tratarData;