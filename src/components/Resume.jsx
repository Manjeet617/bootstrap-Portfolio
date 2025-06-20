import React from "react";

function ResumeButton(){
    return(
        <div className="text-center mt-0">
            <a href="./ManjeetKumarCv.pdf"
            download
            className="btn btn-secondary mx-2">
                Download Resume
            </a>
        </div>
    );
}

export default ResumeButton;