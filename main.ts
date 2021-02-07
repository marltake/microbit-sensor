let seq = 0
let _namespace = 1634558569
basic.forever(function () {
    if (seq == 256) {
        seq = 0
    }
    bluetooth.advertiseUid(
    _namespace,
    seq * 16777216 + input.temperature(),
    7,
    false
    )
    seq += 1
    basic.pause(5000)
    bluetooth.stopAdvertising()
    basic.pause(5000)
})
