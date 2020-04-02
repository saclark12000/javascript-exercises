let findTheOldest = function(records) {
    const curYear = new Date().getFullYear();
    return records.reduce((oldRecord, curRecord)=>{
        const oldDeath = oldRecord.yearOfDeath ? oldRecord.yearOfDeath : curYear;
        const curDeath = curRecord.yearOfDeath ? curRecord.yearOfDeath : curYear;
        const oldAge = oldDeath - oldRecord.yearOfBirth;
        const curAge = curDeath - curRecord.yearOfBirth;
        return oldAge > curAge ? oldRecord : curRecord;
    }, [])
}

module.exports = findTheOldest
