import React from 'react';
/* import '../rbacss/profile.css'; */
function Profile(props) {
    return (
        <React.Fragment>
        <div Class="ProfileBodyCss">
        <div class="container rounded bg-info mt-5">
            <div class="row">
        <div class="col-md-4">
            <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img class="rounded-circle mt-5" src="https://i.imgur.com/0eg0aG0.jpg" width="90"/><span class="font-weight-bold">John Doe</span><span class="text-black-50">john_doe12@bbb.com</span><span>United States</span></div>
        </div>
        <div class="col-md-8">
            <div class="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <div class="d-flex flex-row align-items-center back"><i class="fa fa-long-arrow-left mr-1 mb-1"></i>
                    </div>
                </div>
                <div class="row mt-2">
                    <div class="col-md-6"><input type="text" class="form-control" placeholder="first name" value="John"/></div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-6"><input type="text" class="form-control" placeholder="Email" value="john_doe12@bbb.com"/></div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-6"><input type="text" class="form-control" placeholder="address" value="D-113, right avenue block, CA,USA"/></div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-6"><input type="text" class="form-control" placeholder="Bank Name" value="Bank of America"/></div>
                </div>
                <div class="mt-5 text-right"><button class="btn btn-primary profile-button" type="button">Save Profile</button></div>
            </div>
        </div>
    </div>
</div> 
</div>
</React.Fragment>
    );
}

export default Profile;