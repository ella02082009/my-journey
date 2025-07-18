starting_time_hours = 12
starting_time_minutes = 17
event_duration_minutes = 59
print("starting time(hours):", 12, "starting time(minutes):", 17, "Event duration(minutes):", 59)

# Given values from the image
starting_time_hours = 12
starting_time_minutes = 17
event_duration_minutes = 59

# Calculate total minutes from start of day for the starting time
total_starting_minutes = (starting_time_hours * 60) + starting_time_minutes

# Calculate total minutes from start of day for the end time
total_ending_minutes = total_starting_minutes + event_duration_minutes

# Convert total ending minutes back to hours and minutes
ending_hours = total_ending_minutes // 60
ending_minutes = total_ending_minutes % 60

print(f"Starting time: {starting_time_hours:02d}:{starting_time_minutes:02d}")
print(f"Event duration: {event_duration_minutes} minutes")
print(f"Event ends at: {ending_hours:02d}:{ending_minutes:02d}")