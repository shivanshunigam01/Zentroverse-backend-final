import { env } from "../config/env.js";

async function postJson(url, payload) {
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error(`Notification failed with status ${res.status}`);
}

export async function notifyNewLead(lead) {
  const payload = {
    event: "new_lead",
    lead,
    notifyEmail: env.adminNotifyEmail,
  };

  const tasks = [];
  if (env.leadWebhookUrl) tasks.push(postJson(env.leadWebhookUrl, payload));
  if (env.whatsappNotifyUrl) tasks.push(postJson(env.whatsappNotifyUrl, payload));

  if (!tasks.length) return;
  const results = await Promise.allSettled(tasks);
  results.forEach((result) => {
    if (result.status === "rejected") console.error("Lead notification error:", result.reason?.message || result.reason);
  });
}
