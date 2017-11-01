import { Component } from '@angular/core';

@Component({

    selector:'nav-bar',
    template:`
             <nav class="navbar navbar-light " style="background-color:#1d1271;">
                <span class="navbar-brand mb-0 h1" id="site-name" style="color:white;">Optimus TT table Status</span>
             </nav>
    `,
    styleUrls:['./navbar.component.css']

})

export class NavComponent {}

