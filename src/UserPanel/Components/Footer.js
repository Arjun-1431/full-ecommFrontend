export default function Footer(){
 return(
    <>
     <footer class="">
                <div class="mx-auto grid max-w-screen-xl gap-y-8 gap-x-12 px-4 py-10 sm:px-20 md:grid-cols-2 xl:grid-cols-4 xl:px-10">
                    <div class="max-w-sm">
                        <div class="mb-6 flex h-10 items-center space-x-2">
                            <img class="h-full object-contain" src="/images/logo-circle.png" alt="" />
                            <span class="text-lg font-medium">Boleno</span>
                        </div>
                        <div class="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis ad a officia ea expedita!</div>
                    </div>
                    <div class="">
                        <div class="mt-4 mb-2 font-medium xl:mb-4">Guides</div>
                        <nav aria-label="Guides Navigation" class="text-gray-500">
                            <ul class="space-y-3">
                                <li><a class="hover:text-blue-600 hover:underline" >How to make a footer</a></li>
                                <li><a class="hover:text-blue-600 hover:underline" >Designing your app</a></li>
                                <li><a class="hover:text-blue-600 hover:underline" >Getting help from the community</a></li>
                                <li><a class="hover:text-blue-600 hover:underline" >Pricing vs Hourly Rate</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div class="">
                        <div class="mt-4 mb-2 font-medium xl:mb-4">Links</div>
                        <nav aria-label="Footer Navigation" class="text-gray-500">
                            <ul class="space-y-3">
                                <li><a class="hover:text-blue-600 hover:underline" >Pricing</a></li>
                                <li><a class="hover:text-blue-600 hover:underline" >Demo</a></li>
                                <li><a class="hover:text-blue-600 hover:underline" >Press</a></li>
                                <li><a class="hover:text-blue-600 hover:underline" >Support Hub</a></li>
                                <li><a class="hover:text-blue-600 hover:underline" >Contact</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div class="">
                        <div class="mt-4 mb-2 font-medium xl:mb-4">Support Us on Product Hunt</div>
                        <div class="flex flex-col">
                            <div class="mb-4">
                                <a href="https://www.producthunt.com/products/Apple?utm_source=badge-follow&utm_medium=badge&utm_souce=badge-Apple" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/follow.svg?post_id=100070&theme=light" alt="Apple - Think&#0032;Different | Product Hunt" width="250" height="54" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="border-t">
                    <div class="mx-auto flex max-w-screen-xl flex-col gap-y-4 px-4 py-3 text-center text-gray-500 sm:px-20 lg:flex-row lg:justify-between lg:text-left xl:px-10">
                        <p class="">© 2022 Boleno | All Rights Reserved</p>
                        <p class="-order-1 sm:order-none">Made with ❤️ Remotely</p>
                        <p class="">
                            <a class="" >Privacy Policy</a>
                            <span>|</span>
                            <a class="">Terms of Service</a>
                        </p>
                    </div>
                </div>
            </footer>
    </>
 )
}