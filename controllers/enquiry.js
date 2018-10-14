const enquiry = require('./enquiryController.js');

let addEnquiry = (req,res)=>{
    let enquiryData = enquiry.addEnquiry(req);
    console.log(enquiryData);
    res.json(enquiryData);
}

module.exports={
    addEnquiry
}