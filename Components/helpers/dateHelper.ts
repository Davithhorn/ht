import moment from "moment"


const dateDDMMyyyyHHmmA=(date?: number)=>{
    return moment(date).format("DD-MM-yyyy HH:mm A")
}

const dateMMMMDOYYYY=(date?: number)=>{
    return moment(date).format("MMMM DD, YYYY")
}

export {dateDDMMyyyyHHmmA,dateMMMMDOYYYY}