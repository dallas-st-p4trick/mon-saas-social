"use client";
import React, { useState } from "react";
import { Sparkles, Copy, Check, Hash, Zap, Crown } from "lucide-react";

export default function ViralBoostSaaS() {
  const [niche, setNiche] = useState("");
  const [platform, setPlatform] = useState("TikTok");
  const [goal, setGoal] = useState("Vendre un produit");
  const [results, setResults] = useState([]);
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [credits, setCredits] = useState(3);
  const [showProModal, setShowProModal] = useState(false);

  const generateIdeas = (e) => {
    e.preventDefault();
    if (!niche.trim()) return;
    if (credits <= 0) {
      setShowProModal(true);
      return;
    }

    const templates = [
      {
        title: `Idée 1 : L'erreur fatale dans le domaine "${niche}"`,
        hook: `« Arrête tout si tu t'intéresses à ${niche} ! Voici l'erreur que 90 % des gens font encore... »`,
        script: `1. Montre le problème face caméra (3 sec).\n2. Explique pourquoi la méthode classique échoue.\n3. Présente ta solution (${goal.toLowerCase()}) avec un exemple concret.\n4. Appel à l'action : « Commente GO pour en savoir plus ! »`,
        hashtags: `#${niche.replace(/\s+/g, "")} #astuce #${platform.toLowerCase()} #viral #conseils`
      },
      {
        title: `Idée 2 : Avant / Après ou Coulisses (${niche})`,
        hook: `« Personne ne te montre ce qui se passe vraiment derrière ${niche}... Regarde ça ! »`,
        script: `1. Filme les coulisses ou un résultat impressionnant dès la 1ère seconde.\n2. Raconte une mini-histoire en voix-off.\n3. Montre comment ton offre aide à ${goal.toLowerCase()}.\n4. Appel à l'action : « Enregistre cette vidéo pour plus tard ! »`,
        hashtags: `#coulisses #${niche.replace(/\s+/g, "")} #business #entrepreneur #pourtoi`
      },
      {
        title: `Idée 3 : 3 secrets rapides sur "${niche}"`,
        hook: `« 3 choses que j'aurais aimé savoir avant de me lancer dans ${niche} ! »`,
        script: `1. Secret 1 : Le gain de temps.\n2. Secret 2 : L'astuce économique que les pros gardent pour eux.\n3. Secret 3 : Comment passer à l'action dès aujourd'hui (${goal.toLowerCase()}).\n4. Appel à l'action : « Abonne-toi pour la partie 2 ! »`,
        hashtags: `#secrets #${niche.replace(/\s+/g, "")} #tuto #croissance #fyp`
      }
    ];

    setResults(templates);
    setCredits(credits - 1);
  };

  const copyText = (item, idx) => {
    const fullText = `${item.title}\n\nAccroche : ${item.hook}\n\nScript :\n${item.script}\n\nHashtags : ${item.hashtags}`;
    navigator.clipboard.writeText(fullText);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#09090b", color: "#fafafa", fontFamily: "system-ui, sans-serif", padding: "20px" }}>
      <div style={{ maxWidth: "680px", margin: "0 auto" }}>
        <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: "24px", borderBottom: "1px solid #27272a" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", fontWeight: "bold", fontSize: "20px" }}>
            <Zap color="#a855f7" fill="#a855f7" size={24} />
            <span>ViralBoost</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ fontSize: "13px", backgroundColor: "#18181b", padding: "6px 12px", borderRadius: "20px", border: "1px solid #27272a" }}>
              {credits} essai{credits > 1 ? "s" : ""} gratuit{credits > 1 ? "s" : ""}
            </span>
            <button
              onClick={() => setShowProModal(true)}
              style={{ backgroundColor: "#a855f7", color: "white", border: "none", padding: "6px 14px", borderRadius: "20px", fontWeight: "600", fontSize: "13px", cursor: "pointer", display: "flex", alignItems: "center", gap: "4px" }}
            >
              <Crown size={14} /> Pro
            </button>
          </div>
        </header>

        <div style={{ textAlign: "center", margin: "32px 0" }}>
          <h1 style={{ fontSize: "28px", fontWeight: "800", lineHeight: "1.2", marginBottom: "12px" }}>
            Générez des scripts viraux en <span style={{ color: "#a855f7" }}>10 secondes</span>
          </h1>
          <p style={{ color: "#a1a1aa", fontSize: "15px" }}>
            Idées de vidéos, accroches captivantes et hashtags optimisés pour TikTok, Reels et Shorts.
          </p>
        </div>

        <form onSubmit={generateIdeas} style={{ backgroundColor: "#18181b", padding: "20px", borderRadius: "16px", border: "1px solid #27272a", display: "flex", flexDirection: "column", gap: "16px" }}>
          <div>
            <label style={{ display: "block", fontSize: "13px", color: "#d4d4d8", marginBottom: "6px", fontWeight: "600" }}>
              Votre activité ou sujet
            </label>
            <input
              type="text"
              placeholder="Ex: Vente de chaussures, Coiffure, Immobilier, Fitness..."
              value={niche}
              onChange={(e) => setNiche(e.target.value)}
              required
              style={{ width: "100%", padding: "12px", borderRadius: "10px", border: "1px solid #3f3f46", backgroundColor: "#09090b", color: "white", fontSize: "15px", boxSizing: "border-box" }}
            />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
            <div>
              <label style={{ display: "block", fontSize: "13px", color: "#d4d4d8", marginBottom: "6px", fontWeight: "600" }}>
                Réseau social
              </label>
              <select
                value={platform}
                onChange={(e) => setPlatform(e.target.value)}
                style={{ width: "100%", padding: "12px", borderRadius: "10px", border: "1px solid #3f3f46", backgroundColor: "#09090b", color: "white", fontSize: "14px" }}
              >
                <option value="TikTok">TikTok</option>
                <option value="Instagram Reels">Instagram Reels</option>
                <option value="YouTube Shorts">YouTube Shorts</option>
                <option value="Statut WhatsApp">Statut WhatsApp</option>
              </select>
            </div>

            <div>
              <label style={{ display: "block", fontSize: "13px", color: "#d4d4d8", marginBottom: "6px", fontWeight: "600" }}>
                Objectif
              </label>
              <select
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                style={{ width: "100%", padding: "12px", borderRadius: "10px", border: "1px solid #3f3f46", backgroundColor: "#09090b", color: "white", fontSize: "14px" }}
              >
                <option value="Vendre un produit">Vendre un produit</option>
                <option value="Gagner des abonnés">Gagner des abonnés</option>
                <option value="Attirer des clients sur WhatsApp">Clients sur WhatsApp</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            style={{ backgroundColor: "#a855f7", color: "white", border: "none", padding: "14px", borderRadius: "10px", fontWeight: "700", fontSize: "16px", cursor: "pointer", display: "flex", justifyContent: "center", alignItems: "center", gap: "8px", marginTop: "4px" }}
          >
            <Sparkles size={18} /> Générer mes 3 scripts viraux
          </button>
        </form>

        {results.length > 0 && (
          <div style={{ marginTop: "28px", display: "flex", flexDirection: "column", gap: "16px" }}>
            <h2 style={{ fontSize: "18px", fontWeight: "700" }}>Vos scripts prêts à tourner ({platform}) :</h2>
            {results.map((item, idx) => (
              <div key={idx} style={{ backgroundColor: "#18181b", padding: "18px", borderRadius: "14px", border: "1px solid #27272a" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "10px", marginBottom: "10px" }}>
                  <h3 style={{ fontSize: "16px", fontWeight: "700", color: "#e9d5ff", margin: 0 }}>{item.title}</h3>
                  <button
                    onClick={() => copyText(item, idx)}
                    style={{ backgroundColor: "#27272a", color: "white", border: "none", padding: "6px 10px", borderRadius: "8px", fontSize: "12px", cursor: "pointer", display: "flex", alignItems: "center", gap: "4px", flexShrink: 0 }}
                  >
                    {copiedIndex === idx ? <><Check size={14} color="#4ade80" /> Copié</> : <><Copy size={14} /> Copier</>}
                  </button>
                </div>
                <p style={{ fontSize: "14px", color: "#f4f4f5", backgroundColor: "#09090b", padding: "10px", borderRadius: "8px", borderLeft: "3px solid #a855f7", marginBottom: "10px" }}>
                  <strong>Accroche :</strong> {item.hook}
                </p>
                <p style={{ fontSize: "14px", color: "#d4d4d8", whiteSpace: "pre-line", lineHeight: "1.5", marginBottom: "10px" }}>
                  {item.script}
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "13px", color: "#a855f7" }}>
                  <Hash size={14} /> <span>{item.hashtags}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {showProModal && (
          <div style={{ position: "fixed", inset: 0, backgroundColor: "rgba(0,0,0,0.8)", display: "flex", alignItems: "center", justifyContent: "center", padding: "20px", zIndex: 50 }}>
            <div style={{ backgroundColor: "#18181b", padding: "24px", borderRadius: "16px", border: "1px solid #a855f7", maxWidth: "400px", width: "100%", textAlign: "center" }}>
              <Crown size={36} color="#a855f7" style={{ margin: "0 auto 12px" }} />
