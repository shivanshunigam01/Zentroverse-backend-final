import ModuleStore from "../models/ModuleStore.js";

export async function getModuleData(key, fallback = {}) {
  const doc = await ModuleStore.findOne({ key });
  if (!doc) return { ...fallback };
  return doc.data ?? fallback;
}

export async function setModuleData(key, data) {
  const doc = await ModuleStore.findOneAndUpdate({ key }, { data }, { upsert: true, new: true });
  return doc.data;
}

export async function mutateModuleData(key, mutator, fallback = {}) {
  const doc = await ModuleStore.findOne({ key });
  const current = doc?.data ?? fallback;
  const next = await mutator(JSON.parse(JSON.stringify(current)));
  await ModuleStore.findOneAndUpdate({ key }, { data: next }, { upsert: true });
  return next;
}
