// import { defineField, defineType } from "sanity";

// import { secondsToMinutes } from "../../lib/secondToMinutes";
// import Duration from "../componets/Duration";

// export default defineType({
//   name: "track",
//   title: "Track",
//   type: "object",
//   fields: [
//     defineField({
//       name: "title",
//       type: "string",
//     }),
//     defineField({
//       name: "duration",
//       description: "Time in seconds",
//       type: "number",
//       components: {
//         input: Duration,
//       },
//     }),
//   ],
//   preview: {
//     select: {
//       title: "title",
//       duration: "duration",
//     },
//     prepare({ title, duration }) {
//       return {
//         title,
//         subtitle: secondsToMinutes(duration),
//       };
//     },
//   },
// });
