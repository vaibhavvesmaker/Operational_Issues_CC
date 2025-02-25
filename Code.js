function syncCalendars() {
    var sourceCalendars = [
        'vaibhavvesmaker@gmail.com',  // your personal email 1
        'vv337@scarletmail.rutgers.edu', // your work email other than corecentrica 
      // 'test@gmail.com',                                 // you can add emails as many as you can 
    ];
    var targetCalendar = CalendarApp.getCalendarById('vaibhav@corecentrica.com'); 

    if (!targetCalendar) return Logger.log("❌ Target calendar not found!");

    var now = new Date(), future = new Date();
    future.setMonth(now.getMonth() + 3);

    // Clear old 'Busy' events
    targetCalendar.getEvents(now, future).forEach(e => { if (e.getTitle() === "Busy") e.deleteEvent(); });

    sourceCalendars.forEach(calendarId => {
        var calendar = CalendarApp.getCalendarById(calendarId);
        if (!calendar) return Logger.log("❌ Source calendar " + calendarId + " not found.");

        calendar.getEvents(now, future).forEach(event => {
            var start = event.getStartTime(), end = event.getEndTime();

            // **Skip all-day events**
            if (event.isAllDayEvent()) {
                Logger.log("⏩ Skipping all-day event: " + event.getTitle());
                return;
            }

            // Check if "Busy" event already exists for this time slot
            if (!targetCalendar.getEvents(start, end).some(e => e.getTitle() === "Busy")) {
                Logger.log("➡️ Creating 'Busy' event for: " + start);
                targetCalendar.createEvent("Busy", start, end);
            } else {
                Logger.log("⚠️ 'Busy' already exists for this time slot, skipping...");
            }
        });
    });

    Logger.log("✅ Sync complete!");
}
