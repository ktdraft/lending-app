import { Locale } from "./Locale";

const vi: Locale = {
    success: {
        updateProfile: "Update successful!",
    },
    popup: {
        yesNo: {
            yes: "ĐỒNG Ý",
            no: "KHÔNG"
        },
        message: {
            confirmLending: "Bạn chắc chắn muốn cho vay?"
        }

    },
    error: {
        profile: {
            emptyName: "Please enter your name!",
            emptyAddress: "Please enter your address!",
            emptyIdNumber: "Please enter your ID number!",
            emptyFrontIdCard: "Please enter your front Id Card!",
            emptyBackIdCard: "Please enter your back Id Card!",
            malformedIdNumber: "Malformed ID Number!"
        },
        OTP: {
            insuccessOTP: "OTP không thành công",
            errServer: "Lỗi server",
        },
        numberPhone: {
            phoneBlank: "Tên đăng nhập không được để trống",
            loginIncorrect: "Tên đăng nhập hoặc mật khẩu không đúng!",
            invalidMobile: "Số điện thoại không hợp lệ",
            incorredPhoneFormat: "Số điện thoại không đúng định dạng",

        },
        password: {
            passwordBlank: "Mật khẩu không được để trống",
            accountHasBeenRegistered: "Tài khoản đã được đăng ký",
            repeatPasswordDontMatch: "Mật khẩu không khớp",
            passwordLessThan6Characters: "Mật khẩu gồm tối thiểu 6 ký tự",
            passwordMoreThan32Characters: "Mật khẩu chỉ từ 6 đến 32 ký tự",
            cantFindAccount: "Bạn không tìm được tài khoản?",
        },
        server: {
            networkError: "Lỗi mạng",
            processError: "Lỗi trong quá trình xử lý"
        },
        giftcode: {
            giftcodeBlank: "Vui lòng nhập mã quà tặng!"
        }

    },
    screens: {
        bankInfo: {
            bankInfoTitle: "BANK INFORMATION",
            bankNameLabel: "Bank Name",
            bankNumberLabel: "Number Bank",
            bankBranchLabel: "Branch",

            bankNamePlaceHolder: "Enter bank name",
            bankNumberPlaceHolder: "Enter bank number",
            bankBranchPlaceHolder: "Enter bank branch",
        },
        editProfile: {
            nameLabel: "Name",
            addressLabel: "Address",
            identityNumberLabel: "Identity Number",
            frontIdCardLabel: "Front ID Card",
            backIdCardLabel: "Back ID Card",

            //Place Holder
            namePlaceholder: "Enter your name",
            addressPlaceholder: "Enter your address",
            idNumberPlaceholder: "Enter ID Number",

            //Button
            updateButton: "UPDATE",
            editButton: "Edit",
            addPhotoButton: "Add Photo",
        },
        dashboard: {
            dashboardTabName: "Bảng điều khiển",
            chart: {
                title: "Biểu đồ",
                totalAmount: "Tổng số tiền",
                lendingAmount: "Tiền cho vay",
                referralAmount: "Tiền giới thiệu",
            },
            finance: {
                total: "Tổng",
                lending: 'Cho vay',
                remaining: "Còn lại",
                referral: "Giới thiệu",
            },
            interestRateHistories: {
                remainDays: "Ngày",
                getButton: "get",
                gotButton: "got",
            }
        },
        lending: {
            lendingTabName: "Cho vay",
            lendingTitle: "CHO ",
            chooseTitle: "Chọn gói",
            walletTitle: "Ví",
            coinInputLabel: "XU",
            allButton: "TẤT CẢ",
            lendButton: "CHO VAY",
            lendingPackage: {
                minInvest: "Tối thiểu",
                interestRate: "Lãi suất",
                matureIn: "Đến hạn",
            },
            lendingHistories: {
                amount: "SỐ TIỀN",
            }
        },
        referral: {
            refTabName: "Giới thiệu",
            refTitle: "GIỚI THIỆU",
            introText: "Hãy sử dụng tính năng Giới thiệu bạn bè để tăng số tiền trong tài khoản. Mỗi lượt Giới thiệu sẽ mang lại 100.000 vào tài khoản và nhận Hoa hồng suốt đời.",
            copyButton: "Sao chép",
            totalRefTitle: "Tổng",
            rewardRefTitle: "Thưởng",
            refHistories: {
                earnedTitle: "ĐÃ KIẾM ĐƯỢC",
            }
        },
        profile: {
            profileTabName: "Hồ sơ",
            profileTitle: "HỒ SƠ",
            bid: "Đấu giá",
            bidHistories: "Đấu giá của tôi",
            coupon: "Quà tặng",
            logout: "Đăng xuất",
            bankInfo: "Bank Info",
        },
        bidDetail: {
            bidderTitle: "Người đấu giá",
            finish: "Finish",
            bidWith: "Bid with",
        },
        listBidding: {
            winner: "Winner",
            noOneHasWon: "No one has won yet",
            upcoming: "Upcoming",
            happening: "Happening",

            fewSecondsAgo: "Few seconds ago",
            minuteAgo: "minute ago",
            hourAgo: "hour ago",
            dayAgo: "day ago",
            tabName: {
                doingTabName: "Đang tham gia",
                comingTabName: "SẮP TỚI",
            }
        },
        myBid: {
            tabName: {
                win: "Thắng đấu giá",
                lose: "Thua đấu giá"
            }
        },
        coupon: {
            giftTitle: "Quà tặng",
            placeholderText: "Nhập mã quà tặng",
            submitButton: "GỬI",
            couponHistories: {
                prize: "Phần thưởng",
            }
        },
        login: {
            mobileInputPlaceholder: "Số điện thoại",
            passwordInputPlaceholder: "Mật khẩu",
            forgetPasswordText: "Quên mật khẩu?",
            loginButtonText: "ĐĂNG NHẬP",
            haventAccount: "Bạn chưa có tài khoản?",
            createAccount: "Tạo tài khoản",
        },
        enterOTP: {
            enterOTPTitle: "Nhập mã OTP",
            enterOTPInputPlaceholder: "Nhập OTP",
            confirmButtonText: "Xác nhận",
            dontGetOTPCode: "Không nhận được mã?",
            enterPhoneAgain: "Nhập lại số điện thoại",
        },
        enterYourPhone: {
            enterYourPhoneTitle: "Nhập số điện thoại",
            enterYourPhonePlaceholder: "Nhập số điện thoại",
            submitButtonText: "Gửi",
            backToLogIn: "Đăng nhập lại",
        },
        enterYourPassword: {
            enterYourPasswordTitle: "Nhập mật khẩu",
            confirmPasswordPlaceHolder: "Xác nhận mật khẩu",
            showPassword: "Xem mật khẩu",
        }
    }
}

export default vi;