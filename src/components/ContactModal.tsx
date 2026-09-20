import React, { useState } from 'react';
import { ContactInfo } from '../types';
import {
  X,
  Globe,
  MessageCircle,
  Instagram,
  Phone,
  Copy,
  Check,
  Send,
  CheckCircle2
} from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  contact: ContactInfo;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  contact
}) => {
  const [copied, setCopied] = useState<string | null>(null);
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  if (!isOpen) return null;

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setFormData({ name: '', phone: '', message: '' });
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-[#F8F5F0] rounded-3xl p-6 sm:p-8 md:p-10 border border-[#DACDC3] shadow-2xl max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 rounded-full bg-[#EFE8E1] hover:bg-[#E2D6CA] text-[#4A3528] flex items-center justify-center transition-colors"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div className="text-center space-y-2 mb-8">
          <span className="font-['Alex_Brush'] text-4xl sm:text-5xl text-[#4A3528] block">
            Let's Collaborate
          </span>
          <h2 className="font-['Playfair_Display'] text-2xl sm:text-3xl font-bold text-[#4A3528]">
            Connect with Salik
          </h2>
          <p className="font-['Plus_Jakarta_Sans'] text-sm text-[#6B5749] max-w-md mx-auto">
            Directly connect or submit a project proposal below.
          </p>
        </div>

        {/* Contact Links Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
          {/* Direct Call */}
          <div className="flex items-center justify-between p-3 rounded-2xl bg-[#EFE8E1] border border-[#DDD3C9]">
            <a
              href={`tel:${contact.phone}`}
              className="flex items-center space-x-3 text-xs sm:text-sm font-medium text-[#4A3528] truncate"
            >
              <div className="w-8 h-8 rounded-full bg-[#4A3528] text-[#F8F5F0] flex items-center justify-center shrink-0">
                <Phone size={15} />
              </div>
              <div className="truncate">
                <span className="block truncate font-semibold">{contact.phone}</span>
                <span className="text-[10px] text-[#8C7565] uppercase tracking-wider block">Direct Call</span>
              </div>
            </a>
            <button
              onClick={() => handleCopy(contact.phone, 'phone')}
              title="Copy Phone"
              className="p-1.5 text-[#7D6859] hover:text-[#4A3528]"
            >
              {copied === 'phone' ? (
                <Check size={16} className="text-emerald-700" />
              ) : (
                <Copy size={16} />
              )}
            </button>
          </div>

          {/* WhatsApp */}
          <div className="flex items-center justify-between p-3 rounded-2xl bg-[#EFE8E1] border border-[#DDD3C9]">
            <a
              href={`https://wa.me/${contact.whatsapp.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-xs sm:text-sm font-medium text-[#4A3528] truncate"
            >
              <div className="w-8 h-8 rounded-full bg-[#25D366] text-[#FFFFFF] flex items-center justify-center shrink-0">
                <MessageCircle size={15} />
              </div>
              <div className="truncate">
                <span className="block truncate font-semibold">{contact.whatsapp}</span>
                <span className="text-[10px] text-[#2E7D32] uppercase tracking-wider font-semibold block">Chat on WhatsApp</span>
              </div>
            </a>
            <button
              onClick={() => handleCopy(contact.whatsapp, 'whatsapp')}
              title="Copy WhatsApp"
              className="p-1.5 text-[#7D6859] hover:text-[#4A3528]"
            >
              {copied === 'whatsapp' ? (
                <Check size={16} className="text-emerald-700" />
              ) : (
                <Copy size={16} />
              )}
            </button>
          </div>

          {/* Website */}
          <div className="flex items-center justify-between p-3 rounded-2xl bg-[#EFE8E1] border border-[#DDD3C9]">
            <a
              href={`https://${contact.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-xs sm:text-sm font-medium text-[#4A3528] truncate"
            >
              <div className="w-8 h-8 rounded-full bg-[#4A3528] text-[#F8F5F0] flex items-center justify-center shrink-0">
                <Globe size={15} />
              </div>
              <span className="truncate">{contact.website}</span>
            </a>
            <button
              onClick={() => handleCopy(contact.website, 'website')}
              title="Copy Website"
              className="p-1.5 text-[#7D6859] hover:text-[#4A3528]"
            >
              {copied === 'website' ? (
                <Check size={16} className="text-emerald-700" />
              ) : (
                <Copy size={16} />
              )}
            </button>
          </div>

          {/* Instagram */}
          <div className="flex items-center justify-between p-3 rounded-2xl bg-[#EFE8E1] border border-[#DDD3C9]">
            <a
              href={`https://instagram.com/${contact.instagram.replace('@', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-xs sm:text-sm font-medium text-[#4A3528] truncate"
            >
              <div className="w-8 h-8 rounded-full bg-[#4A3528] text-[#F8F5F0] flex items-center justify-center shrink-0">
                <Instagram size={15} />
              </div>
              <span>{contact.instagram}</span>
            </a>
            <button
              onClick={() => handleCopy(contact.instagram, 'insta')}
              title="Copy Handle"
              className="p-1.5 text-[#7D6859] hover:text-[#4A3528]"
            >
              {copied === 'insta' ? (
                <Check size={16} className="text-emerald-700" />
              ) : (
                <Copy size={16} />
              )}
            </button>
          </div>
        </div>

        {/* Message Form */}
        <div className="pt-2">
          {sent ? (
            <div className="py-8 text-center space-y-3 bg-[#EFE8E1] rounded-2xl p-6">
              <div className="w-12 h-12 rounded-full bg-[#4A3528] text-[#F8F5F0] mx-auto flex items-center justify-center">
                <CheckCircle2 size={24} />
              </div>
              <h4 className="font-['Playfair_Display'] text-xl font-bold text-[#4A3528]">
                Message Sent Successfully
              </h4>
              <p className="text-xs sm:text-sm text-[#6B5749]">
                Thank you! Salik will review your note shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#5A4537] mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Liam Parker"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full bg-[#F3ECE5] border border-[#DDD3C9] focus:border-[#4A3528] rounded-xl px-3.5 py-2.5 text-sm text-[#4A3528] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#5A4537] mb-1">
                    Your Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 7378671779"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full bg-[#F3ECE5] border border-[#DDD3C9] focus:border-[#4A3528] rounded-xl px-3.5 py-2.5 text-sm text-[#4A3528] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#5A4537] mb-1">
                  Message
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="Share details about your brand, project scope, or ideas..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full bg-[#F3ECE5] border border-[#DDD3C9] focus:border-[#4A3528] rounded-xl px-3.5 py-2.5 text-sm text-[#4A3528] focus:outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#4A3528] text-[#F8F5F0] hover:bg-[#32231A] rounded-full font-['Plus_Jakarta_Sans'] text-sm font-semibold tracking-wide flex items-center justify-center space-x-2 transition-all shadow-md active:scale-98"
              >
                <span>Send Note</span>
                <Send size={15} />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
