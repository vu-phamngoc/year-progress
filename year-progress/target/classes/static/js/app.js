(function () {

    const scene =
        document.getElementById('scene');


    if (!scene) {
        return;
    }


    // =========================
    // OFFSET
    // =========================

    const offset =
        parseInt(
            scene.dataset.offset || '0',
            10
        );


    // =========================
    // NĂM
    // =========================

    const yearCurrentEl =
        document.getElementById('yearCurrent');

    const yearNextEl =
        document.getElementById('yearNext');


    // =========================
    // THÁNG
    // =========================

    const monthEls =
        Array.from(
            document.querySelectorAll(
                '#monthsRow span'
            )
        );


    // =========================
    // NGÀY / GIỜ
    // =========================

    const weekdayEl =
        document.getElementById('weekday');

    const dayNumberEl =
        document.getElementById('dayNumber');

    const monthNumberEl =
        document.getElementById('monthNumber');

    const yearNumberEl =
        document.getElementById('yearNumber');

    const timeNumberEl =
        document.getElementById('timeNumber');


    // =========================
    // THỨ
    // =========================

    const WEEKDAYS = [

        'Chủ Nhật',

        'Thứ Hai',

        'Thứ Ba',

        'Thứ Tư',

        'Thứ Năm',

        'Thứ Sáu',

        'Thứ Bảy'

    ];


    // =========================
    // 01, 02, 03...
    // =========================

    function pad2(number) {

        return number < 10
            ? '0' + number
            : String(number);

    }


    // =========================
    // GIỚI HẠN 0 → 100
    // =========================

    function clamp(value) {

        return Math.min(
            Math.max(value, 0),
            100
        );

    }


    // =========================
    // CẬP NHẬT
    // =========================

    function tick() {

        const now =
            new Date();


        // =========================
        // THỜI GIAN THẬT
        // =========================

        const realYear =
            now.getFullYear();

        const realMonth =
            now.getMonth() + 1;

        const realDay =
            now.getDate();

        const hours =
            now.getHours();

        const minutes =
            now.getMinutes();

        const seconds =
            now.getSeconds();

        const milliseconds =
            now.getMilliseconds();


        // =========================
        // NĂM HIỂN THỊ
        // =========================

        const startYear =
            realYear + offset;

        const endYear =
            startYear + 1;


        // =========================
        // TÍNH % NĂM
        // =========================

        const startOfYear =
            new Date(
                realYear,
                0,
                1,
                0,
                0,
                0,
                0
            );


        const startOfNextYear =
            new Date(
                realYear + 1,
                0,
                1,
                0,
                0,
                0,
                0
            );


        const yearLength =
            startOfNextYear -
            startOfYear;


        const elapsedYear =
            now -
            startOfYear;


        let yearProgress;


        if (startYear < realYear) {

            yearProgress = 100;

        }

        else if (startYear > realYear) {

            yearProgress = 0;

        }

        else {

            yearProgress =
                (
                    elapsedYear /
                    yearLength
                ) * 100;

        }


        yearProgress =
            clamp(yearProgress);


        // =========================
        // HIỂN THỊ NĂM
        // =========================

        yearCurrentEl.textContent =
            startYear;


        yearNextEl.textContent =
            endYear;


        yearCurrentEl.style.setProperty(
            '--progress',
            yearProgress + '%'
        );


        // =========================
        // TÍNH % THÁNG
        // =========================

        monthEls.forEach(
            function (element, index) {

                const month =
                    index + 1;


                let progress;


                // Năm trước
                if (startYear < realYear) {

                    progress = 100;

                }


                // Năm sau
                else if (startYear > realYear) {

                    progress = 0;

                }


                // Tháng đã qua
                else if (month < realMonth) {

                    progress = 100;

                }


                // Tháng tương lai
                else if (month > realMonth) {

                    progress = 0;

                }


                // Tháng hiện tại
                else {

                    const startOfMonth =
                        new Date(
                            realYear,
                            realMonth - 1,
                            1,
                            0,
                            0,
                            0,
                            0
                        );


                    const startOfNextMonth =
                        new Date(

                            realMonth === 12
                                ? realYear + 1
                                : realYear,

                            realMonth === 12
                                ? 0
                                : realMonth,

                            1,

                            0,
                            0,
                            0,
                            0

                        );


                    const monthLength =
                        startOfNextMonth -
                        startOfMonth;


                    const elapsedMonth =
                        now -
                        startOfMonth;


                    progress =
                        (
                            elapsedMonth /
                            monthLength
                        ) * 100;

                }


                progress =
                    clamp(progress);


                element.style.setProperty(
                    '--progress',
                    progress + '%'
                );

            }
        );


        // =========================
        // TÍNH % NGÀY
        // =========================

        const secondsToday =

            hours * 3600 +

            minutes * 60 +

            seconds +

            milliseconds / 1000;


        const totalSecondsInDay =
            24 * 60 * 60;


        const dayProgress =

            (
                secondsToday /
                totalSecondsInDay
            ) * 100;


        // =========================
        // HIỂN THỊ NGÀY GIỜ
        // =========================

        weekdayEl.textContent =
            WEEKDAYS[now.getDay()];


        dayNumberEl.textContent =
            pad2(realDay);


        monthNumberEl.textContent =
            pad2(realMonth);


        yearNumberEl.textContent =
            realYear;


        timeNumberEl.textContent =

            `${pad2(hours)}:` +
            `${pad2(minutes)}:` +
            `${pad2(seconds)}`;


        // =========================
        // % CHẠY CỦA NGÀY
        // =========================

        dayNumberEl.style.setProperty(

            '--progress',

            clamp(dayProgress) + '%'

        );

    }


    // =========================
    // CHẠY NGAY LẬP TỨC
    // =========================

    tick();


    // =========================
    // CẬP NHẬT 100ms
    // =========================

    setInterval(
        tick,
        100
    );


})();