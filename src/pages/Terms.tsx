import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, FileText, CreditCard, Clock, RefreshCw, Edit3, Image, Key, Globe, MessageCircle, Ban, Settings, Smartphone, Building2, Copy, Check } from 'lucide-react';

const termsData = [
    {
        number: 1,
        title: "Project Start",
        icon: <Clock className="w-5 h-5" />,
        points: [
            "A project officially starts after deposit payment is received.",
            "No work will begin without a confirmed deposit.",
        ],
    },
    {
        number: 2,
        title: "Delivery Timeline",
        icon: <RefreshCw className="w-5 h-5" />,
        points: [
            "Website projects are completed within 3–5 working days, provided all required information is submitted on time.",
            "Delays in submitting content will automatically delay project completion.",
        ],
    },
    {
        number: 3,
        title: "Payments & Completion",
        icon: <CreditCard className="w-5 h-5" />,
        points: [
            "Final payment is due upon completion of the project.",
            "If full payment is not completed within 7 days after project completion, the website will be temporarily suspended (taken offline).",
            "Continued non-payment may attract additional charges or permanent suspension until payment is settled.",
            "Payments can be made via Mobile Money or Bank Transfer (see payment details below).",
        ],
    },
    {
        number: 4,
        title: "Website Suspension",
        icon: <Ban className="w-5 h-5" />,
        points: [
            "We reserve the right to suspend any website for non-payment.",
            "Expired hosting or subscription may result in suspension.",
            "Abuse or misuse of services may lead to suspension.",
        ],
    },
    {
        number: 5,
        title: "Revisions & Changes",
        icon: <Edit3 className="w-5 h-5" />,
        points: [
            "Reasonable revisions are allowed during the development phase.",
            "Major changes after approval or completion may attract extra charges.",
        ],
    },
    {
        number: 6,
        title: "Content Responsibility",
        icon: <Image className="w-5 h-5" />,
        points: [
            "Clients are fully responsible for all text, images, and materials they provide.",
            "We are not liable for copyright issues arising from client-supplied content.",
        ],
    },
    {
        number: 7,
        title: "Hosting & Domain",
        icon: <Globe className="w-5 h-5" />,
        points: [
            "Free hosting and domain are valid for one year only.",
            "Renewal after the first year is UGX 180,000 annually.",
            "Failure to renew may result in website downtime or deletion.",
        ],
    },
    {
        number: 8,
        title: "Ownership & Website Management",
        icon: <Key className="w-5 h-5" />,
        points: [
            "All websites we build are static websites — they do not have admin panels, dashboards, or login systems.",
            "Websites are hosted and managed by Junooby Tech on behalf of the client.",
            "Full ownership rights are transferred to the client after full payment is completed.",
            "Content updates and modifications can be requested through our team at any time.",
            "Until payment is complete, the website remains the property of Junooby Tech.",
        ],
    },
    {
        number: 9,
        title: "Online Communication",
        icon: <MessageCircle className="w-5 h-5" />,
        points: [
            "All communication is conducted online (WhatsApp, email, or calls).",
            "Instructions and approvals given via these channels are considered valid.",
        ],
    },
    {
        number: 10,
        title: "Refund Policy",
        icon: <CreditCard className="w-5 h-5" />,
        points: [
            "Deposits are non-refundable once work has started.",
            "Refunds are not issued for completed or partially completed work.",
        ],
    },
    {
        number: 11,
        title: "Custom Systems",
        icon: <Settings className="w-5 h-5" />,
        points: [
            "Custom systems require separate quotations.",
            "Timelines and payment terms for custom systems are agreed upon before development begins.",
        ],
    },
    {
        number: 12,
        title: "Service Updates",
        icon: <RefreshCw className="w-5 h-5" />,
        points: [
            "We reserve the right to update prices, services, and terms at any time.",
            "Existing projects are not affected by changes made after agreement.",
        ],
    },
];

const Terms = () => {
    const [copied, setCopied] = React.useState('');
    const copyToClipboard = (text: string, label: string) => {
        navigator.clipboard.writeText(text);
        setCopied(label);
        setTimeout(() => setCopied(''), 2000);
    };
    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            {/* Hero */}
            <section className="pt-24 md:pt-32 pb-12 md:pb-16 bg-gradient-to-br from-background via-background to-card/10 relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/10 rounded-full blur-2xl"></div>
                </div>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <Link to="/web" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Web Services
                    </Link>

                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center">
                            <Shield className="w-7 h-7 text-white" />
                        </div>
                        <div>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                                Terms & Conditions
                            </h1>
                        </div>
                    </div>
                    <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                        By engaging our services, you agree to the following terms. Please read them carefully before starting a project with us.
                    </p>
                </div>
            </section>

            {/* Terms Content */}
            <section className="py-12 md:py-16 bg-background">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-6">
                        {termsData.map((term) => (
                            <div
                                key={term.number}
                                className="bg-card border border-border rounded-2xl p-5 md:p-6 transition-all duration-300 hover:border-primary/20"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 text-primary">
                                        {term.icon}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg md:text-xl font-bold text-foreground mb-3">
                                            <span className="text-primary mr-2">{term.number}.</span>
                                            {term.title}
                                        </h3>
                                        <ul className="space-y-2">
                                            {term.points.map((point, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-muted-foreground text-sm md:text-base leading-relaxed">
                                                    <div className="w-1.5 h-1.5 bg-primary/60 rounded-full mt-2 flex-shrink-0"></div>
                                                    <span>{point}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Payment Methods */}
                    <div className="mt-8 bg-card border border-border rounded-2xl p-5 md:p-6">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 text-primary">
                                <CreditCard className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="text-lg md:text-xl font-bold text-foreground">Payment Methods</h3>
                                <p className="text-muted-foreground text-sm mt-1">Choose the option that works best for you</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="bg-primary/5 border border-primary/20 rounded-xl p-4">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-8 h-8 bg-green-500/10 rounded-lg flex items-center justify-center">
                                        <Smartphone className="w-4 h-4 text-green-500" />
                                    </div>
                                    <h4 className="font-semibold text-foreground">Mobile Money</h4>
                                </div>
                                <div className="flex items-center gap-2">
                                    <p className="text-foreground font-mono text-lg font-bold">+256 766 650 630</p>
                                    <button onClick={() => copyToClipboard('0766650630', 'momo')} className="p-1 rounded-md hover:bg-primary/10 transition-colors" title="Copy number">
                                        {copied === 'momo' ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4 text-muted-foreground" />}
                                    </button>
                                </div>
                                <p className="text-muted-foreground text-sm">Ladu David</p>
                            </div>
                            <div className="bg-primary/5 border border-primary/20 rounded-xl p-4">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center">
                                        <Building2 className="w-4 h-4 text-blue-500" />
                                    </div>
                                    <h4 className="font-semibold text-foreground">Bank Transfer</h4>
                                </div>
                                <div className="flex items-center gap-2">
                                    <p className="text-foreground font-mono text-lg font-bold">9030020559399</p>
                                    <button onClick={() => copyToClipboard('9030020559399', 'bank')} className="p-1 rounded-md hover:bg-primary/10 transition-colors" title="Copy account number">
                                        {copied === 'bank' ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4 text-muted-foreground" />}
                                    </button>
                                </div>
                                <p className="text-muted-foreground text-sm">Ladu David — Stanbic Bank</p>
                            </div>
                        </div>
                    </div>

                    {/* CTA at bottom */}
                    <div className="mt-12 bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-6 md:p-8 text-center">
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                            Need a Website or Custom System?
                        </h2>
                        <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                            Contact us today to get started. Inbox us with your idea, and we'll guide you step by step.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                onClick={() => {
                                    const message = 'Hello! I would like to get a website built. Can we discuss?';
                                    const url = `https://wa.me/256789572007?text=${encodeURIComponent(message)}`;
                                    window.open(url, '_blank');
                                }}
                                className="bg-primary text-primary-foreground px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2"
                            >
                                <MessageCircle className="w-5 h-5" />
                                Contact Us on WhatsApp
                            </button>
                            <Link
                                to="/web"
                                className="border border-border bg-card text-foreground px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:border-primary/50 flex items-center justify-center gap-2"
                            >
                                <FileText className="w-5 h-5" />
                                View Our Services
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Terms;
