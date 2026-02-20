<style>
    @media (max-width: 768px) {
        .custom-center {
            text-align: center;
            margin: 0 auto;
        }
    }
</style>
<footer>
    {{-- Footer Banner --}}
    @if (env('APP_ENV') != 'local')
        <img src="{{ asset('img/Banner_Web_Footer.png') }}" alt="Banner Web Footer" class="img-footer" style="width:100%">
    @endif

    {{-- Footer Contents --}}
    <div class="container-fluid footer">
        <div class="row">
            <div class="col-lg-1"></div>
            <div class="col-md-2 mx-auto mt-3 custom-center">
                <p class="mb-4">
                    <a href="/">
                        <!-- @if (env('APP_ENV') == 'local')
                            <img src="{{ asset(env('APP_CLIENT_LOGO')) }}" alt="Logo Bina Karya"
                                class="d-inline-block align-text-top img-nav">
                        @else -->
                            <img src="{{ config('app.url_backend') }}/uploads/{{ $getLogo->value }}"
                                alt="Logo Bina karya" class="d-inline-block align-text-top   ">
                        <!-- @endif -->
                    </a>
                </p>

                @if (env('APP_ENV') == 'local')
                    @if (isset($getAlamatKampus1->value) && !empty($getAlamatKampus1->value))
                        <p class="m-0">
                            <strong class="text-primary">{!! $getAlamatKampus1->value !!}</strong>
                            <br>
                            {!! $getAlamatKampus1Lengkap->value !!}
                        </p>
                    @endif

                    @if (isset($getAlamatKampus2->value) && !empty($getAlamatKampus2->value))
                        <p class="m-0">
                            <strong class="text-primary">{!! $getAlamatKampus2->value !!}</strong>
                            <br>
                            {!! $getAlamatKampus2Lengkap->value !!}
                        </p>
                    @endif

                    @if (isset($getAlamatKampus3->value) && !empty($getAlamatKampus3->value))
                        <p class="m-0">
                            <strong class="text-primary">{!! $getAlamatKampus3->value !!}</strong>
                            <br>
                            {!! $getAlamatKampus3Lengkap->value !!}
                        </p>
                    @endif

                    @if (isset($getAlamatKampus4->value) && !empty($getAlamatKampus4->value))
                        <p class="m-0">
                            <strong class="text-primary">{!! $getAlamatKampus4->value !!}</strong>
                            <br>
                            {!! $getAlamatKampus4Lengkap->value !!}
                        </p>
                    @endif
                @else
                    @if (isset($getAlamatJkt->value) && !empty($getAlamatJkt->value))
                        <p class="m-0">
                            <strong class="text-primary">{!! $getAlamatJkt->value !!}</strong>
                            <br>
                            {!! $getAlamatJktLengkap->value !!}
                        </p>
                    @endif

                    @if (isset($getAlamatSby->value) && !empty($getAlamatSby->value))
                        <p class="m-0">
                            <strong class="text-primary">{!! $getAlamatSby->value !!}</strong>
                            <br>
                            {!! $getAlamatSbyLengkap->value !!}
                        </p>
                    @endif

                    @if (isset($getAlamatKampus4->value) && !empty($getAlamatKampus4->value))
                        <p class="m-0">
                            <strong class="text-primary">{!! $getAlamatKampus4->value !!}</strong>
                            <br>
                            {!! $getAlamatKampus4Lengkap->value !!}
                        </p>
                    @endif
                @endif
            </div>
            <div class="col-md-2 mx-auto mt-3 custom-center d-block">
                <h4 class="text-uppercase mb-4 font-weight-bold" style="color:#0066FF">{{ __('footer_menu.menu') }}</h4>
                <p class="m-0"><a href="{{ route('getHomepage') }}"
                        class="text-decoration-none">{{ __('footer_menu.home') }}</a></p>
                @if (env('APP_ENV') != 'local')
                <p class="m-0"><a href="{{ route('lms.my-courses') }}" class="text-decoration-none">{{ __('footer_menu.course') }}</a></p>
                @endif
                        @if (env('APP_ENV') != 'local')
                            <p class="m-0"><a href="{{ route('products.getPrakerjaList') }}"
                                    class="text-decoration-none">{{ __('footer_menu.prakerja') }}</a>
                            </p>
                            <!-- <p class=m-0><a href="/learn" class="text-decoration-none">Maxy Talks</a></p> -->
                            <p class="m-0"><a href="{{ route('about-us.getVisionMission') }}"
                                    class="text-decoration-none">{{ __('footer_menu.about_us') }}</a></p>
                        @endif
                        <p class="m-0"><a href="{{ route('getPrivacyPolicy') }}"
                                class="text-decoration-none">{{ __('footer_menu.privacy_policy') }}</a>
                        </p>
            </div>
            <div class="col-md-2 mx-auto mt-3 custom-center d-block">
                <h4 class="text-uppercase mb-4 font-weight-bold" style="color:#0066FF">{{ __('footer_menu.more') }}</h4>
                <p class="m-0"><a href="/partners" class="text-decoration-none">{{ __('footer_menu.partner') }}</a>
                </p>
                @if (env('APP_ENV') != 'local')
                    <p class="m-0"><a href="/#instructor"
                            class="text-decoration-none">{{ __('footer_menu.tutor') }}</a></p>
                    <p class="m-0"><a href="/#package"
                            class="text-decoration-none">{{ __('footer_menu.package') }}</a></p>
                    <p class="m-0"><a href="/#faq" class="text-decoration-none">FAQs</a></p>
                @endif
            </div>
            <div class="col-md-2 mx-auto mt-3 custom-center">
                <h4 class="text-uppercase mb-4 font-weight-bold text-center" style="color:#0066FF">
                    {{ __('footer_menu.social_media') }}</h4>
                <div class="row justify-content-center">
                    <div class="col-3 d-flex justify-content-center">
                        <a href="{{ $getFacebook->value }}">
                            <i class="fab fa-facebook pt-2" name="logo-facebook" style="color: #525252;"></i>
                        </a>
                    </div>
                    <div class="col-3 d-flex justify-content-center">
                        <a href="{{ $getInstagram->value }}">
                            <i class="fab fa-instagram pt-2" name="logo-instagram" style="color: #525252;"></i>
                        </a>
                    </div>
                    <div class="col-3 d-flex justify-content-center">
                        <a href="mailto:{{ $getEmail->value }}">
                            <i class="far fa-envelope pt-2" name="logo-mail" style="color: #525252;"></i>
                        </a>
                    </div>
                </div>
                <div class="row justify-content-center mt-2">
                    <div class="col-3 d-flex justify-content-center">
                        <a href="{{ $getLinkedin->value }}">
                            <i class="fab fa-linkedin pt-2" name="logo-linkedin" style="color: #525252;"></i>
                        </a>
                    </div>
                    <div class="col-3 d-flex justify-content-center">
                        <a href="{{ $getTiktok->value }}">
                            <i class="fab fa-tiktok pt-2" name="logo-tiktok" style="color: #525252;"></i>
                        </a>
                    </div>
                    <div class="col-3 d-flex justify-content-center">
                        <a href="{{ $getWhatsapp->value }}">
                            <i class="fab fa-whatsapp pt-2" style="color: #525252;"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div class="col-lg-1"></div>
        </div>

        <div class="text-center">
            <p>
                Copyrighted &copy;
                <script>
                    document.write(new Date().getFullYear())
                </script> by
                @if (env('APP_ENV') == 'local')
                    <a href="https://www.stiebinakarya.com">
                        <span class="marked">Bina Karya</span>
                    </a>
                @else
                    <a href="https://www.maxy.academy">
                        <span class="marked">Maxy Academy</span>
                    </a>
                @endif
            </p>
        </div>
    </div>

</footer>
