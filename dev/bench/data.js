window.BENCHMARK_DATA = {
  "lastUpdate": 1605552024733,
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
    ]
  }
}