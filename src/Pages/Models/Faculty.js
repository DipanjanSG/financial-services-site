class Faculty
{

    constructor(designation, name , degrees, department, role, coursesTaught , address ="", phoneNumbers =[],emailId =[], pic,knowMoreLink="")
    {
        this.designation = designation || "";
        this.name = name || "";
        this.degrees     = degrees     || [];  
        this.department = department || "";
        this.role = role || "";
        this.coursesTaught = coursesTaught || [];  // array of strings
        // this.address = address || "";
        this.phoneNumbers = phoneNumbers || [];    // array of strings
        this.emailId = emailId || "";
        this.pic = pic||"";
        this.knowMoreLink = knowMoreLink||"";

    }

}

export default Faculty;