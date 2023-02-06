import { IAuth } from "src/app/models/authentication/auth.model";

export const AuthMock : IAuth[] = [
    {
        "email": "superUserRCSA@mail.com",
        "access_token": "$2a$10$FkaH79tBUaNSXkw337sv8OBgatAG.Rq250UPKjbmYAIIOVNIEiF1W",
        "role": "spv",
        "password": "Qwerty12#"

      },
      {
        "email": "spvRCSA@mail.com",
        "access_token": "$2a$10$2/5izyqWRfPXteDheRXVT.ao6vmXMtM6288jnE70tSVVgE/eZUPmG",
        "role": "spv_RCSA",
        "password": "Qwerty12#"

      },
      {
        "email": "inputer@mail.com",
        "access_token": "$2a$10$VD7pfNIA3gbHWFsVTc5OVu1grTX2hSsKzv7hqRdo71xd7DRfKAczq",
        "role": "inputer",
        "password": "Qwerty12#"

      },
      {
        "email": "reviewer@mail.com",
        "access_token": "$2a$10$biqmqZlWCBIR9zweBaaLeeJe/E10m/qE7I7z9Qd.YqT2LobEhMF4G",
        "role": "reviewer",
        "password": "Qwerty12#"
      },
      {
        "email": "approver@mail.com",
        "access_token": "$2a$10$waL2tTnLKq50TuxN5vivveJEYmm2UM8LYpLbxR1SsVsmCjECSI9lW",
        "role": "approver",
        "password": "Qwerty12#"
      },
      {
        "email": "adminMaker@mail.com",
        "access_token": "$2a$10$ZUhYrjC6WXoK4qUD/PA7TeNukqazhJR2h9ORChfFJWJTUL7VCN1Xy",
        "role": "admin_maker",
        "password": "Qwerty12#"

      },
      {
        "email": "adminApprove@mail.com",
        "access_token": "$2a$10$rWutc3NVZB6vfJDTn2khQuKf.eXw/Ci2HjF80J71xp57WbyXj4kwK",
        "role": "admin_approve",
        "password": "Qwerty12#"

      }
]