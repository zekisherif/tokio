window.BENCHMARK_DATA = {
  "lastUpdate": 1605552044174,
  "repoUrl": "https://github.com/zekisherif/tokio",
  "entries": {
    "rt_multi_threaded": [
      {
        "commit": {
          "author": {
            "email": "masnagam@gmail.com",
            "name": "masnagam",
            "username": "masnagam"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4e39c9b818eb8af064bb9f45f47e3cfc6593de95",
          "message": "net: restore TcpStream::{poll_read_ready, poll_write_ready} (#2743)",
          "timestamp": "2020-11-16T09:51:06-08:00",
          "tree_id": "2222dd2f8638fb64f228badef84814d2f4079a82",
          "url": "https://github.com/zekisherif/tokio/commit/4e39c9b818eb8af064bb9f45f47e3cfc6593de95"
        },
        "date": 1605552023951,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 183538,
            "range": "± 37552",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 672679,
            "range": "± 129821",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 4851141,
            "range": "± 1566928",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 19034206,
            "range": "± 2333286",
            "unit": "ns/iter"
          }
        ]
      }
    ],
    "sync_mpsc": [
      {
        "commit": {
          "author": {
            "email": "masnagam@gmail.com",
            "name": "masnagam",
            "username": "masnagam"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4e39c9b818eb8af064bb9f45f47e3cfc6593de95",
          "message": "net: restore TcpStream::{poll_read_ready, poll_write_ready} (#2743)",
          "timestamp": "2020-11-16T09:51:06-08:00",
          "tree_id": "2222dd2f8638fb64f228badef84814d2f4079a82",
          "url": "https://github.com/zekisherif/tokio/commit/4e39c9b818eb8af064bb9f45f47e3cfc6593de95"
        },
        "date": 1605552043293,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6623242,
            "range": "± 1971834",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6757956,
            "range": "± 1704945",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 6184235,
            "range": "± 2844334",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 535,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 522,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 515,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 49610,
            "range": "± 1579",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 803,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1116271,
            "range": "± 11460",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 791585,
            "range": "± 88464",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}