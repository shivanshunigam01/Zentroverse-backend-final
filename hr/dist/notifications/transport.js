const noopTransport = {
    deliver() { },
};
let transport = noopTransport;
export function setNotificationTransport(next) {
    transport = next;
}
export function deliverNotification(notification) {
    try {
        transport.deliver(notification);
    }
    catch {
        // Realtime delivery must not fail the write path.
    }
}
//# sourceMappingURL=transport.js.map