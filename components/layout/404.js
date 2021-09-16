import React from 'react';
import Link from 'next/link';

const Error404 = () => {
    return (
        <section class="page_404">
        <div class="container">
            <div class="row">	
                <div class="col-sm-12 ">
                    <div class="col-sm-10 col-sm-offset-1  text-center">

                        <div class="four_zero_four_bg">
                            <h1 class="text-center ">404</h1>                       
                        </div>
                        
                        <div class="contant_box_404">
                            <h3 class="h2">¡Parece que te has perdido!</h3>    

                            <p>La página que estás buscando no está disponible!</p>
                            <Link href="/" class="link_404">Home</Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}
 
export default Error404;

