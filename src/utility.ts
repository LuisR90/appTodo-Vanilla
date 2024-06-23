function timeConverter(UNIX_timestamp: number):string {
    let a = new Date(UNIX_timestamp);
    let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    let year = a.getFullYear();
    let month = months[a.getMonth()];
    let date = a.getDate();
    let hour = a.getHours();
    let min = a.getMinutes();
    let time = date + ' ' + month + ' ' + year + ' | ' + hour + ':' + min ;
    return time;
}

export default { timeConverter }