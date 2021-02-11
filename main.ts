let seq = 0
let _namespace = 1634558569
let interval = 60000
let next_time = input.runningTime() + interval
basic.forever(function () {
    if (seq == 256) {
        seq = 0
    }
    bluetooth.advertiseUid(
    _namespace,
    seq * 16777216 + input.temperature(),
    0,
    false
    )
    basic.pause(2000)
    bluetooth.stopAdvertising()
    basic.pause(next_time - input.runningTime())
    next_time = next_time + interval
    seq += 1
})
