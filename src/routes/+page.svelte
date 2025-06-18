<!-- <script>
	export let data;
	const events = data.events;
	const now = new Date();

	// Categorize events
	const upcomingEvents = events.filter((event) => new Date(event.event_start_datetime) > now);
	const ongoingEvents = events.filter(
		(event) =>
			new Date(event.event_start_datetime) <= now && new Date(event.event_end_datetime) >= now
	);
	const pastEvents = events.filter((event) => new Date(event.event_end_datetime) < now);
</script> -->

<script>
	console.log(events);
</script>

{#each events as event}
	<p>{event.event_name}</p>
{/each}
